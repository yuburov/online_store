import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { returnProductObject } from './return-product.object';
import { EnumProductSort, GetAllProductDto, ProductDto } from './dto';
import { generateSlug } from 'utils/generate-slug';
import { PaginationService } from 'src/pagination/pagination.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(
    private prisma: PrismaService,
    private paginationService: PaginationService,
  ) {}

  async getAll(dto: GetAllProductDto = {}) {
    const { sort, searchTerm } = dto;

    const prismaSort: Prisma.ProductOrderByWithRelationInput[] = [];

    if (sort === EnumProductSort.LOW_PRICE) {
      prismaSort.push({ price: 'asc' });
    } else if (sort === EnumProductSort.HIGH_PRICE) {
      prismaSort.push({ price: 'desc' });
    } else if (sort === EnumProductSort.OLDEST) {
      prismaSort.push({ createdAt: 'asc' });
    } else {
      prismaSort.push({ createdAt: 'desc' });
    }

    const prismaSearchTermFilter: Prisma.ProductWhereInput = searchTerm
      ? {
          OR: [
            {
              category: {
                name: {
                  contains: searchTerm,
                  mode: 'insensitive',
                },
              },
            },
            {
              name: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
            {
              description: {
                contains: searchTerm,
                mode: 'insensitive',
              },
            },
          ],
        }
      : {};

    const { perPage, skip } = this.paginationService.getPagination(dto);

    const products = await this.prisma.product.findMany({
      where: prismaSearchTermFilter,
      orderBy: prismaSort,
      skip,
      take: perPage,
      select: returnProductObject,
    });

    return {
      products,
      length: await this.prisma.product.count({
        where: prismaSearchTermFilter,
      }),
    };
  }

  async byId(productId: number) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
      select: returnProductObject,
    });

    if (!product) {
      throw new NotFoundException('product not found');
    }

    return product;
  }

  async bySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        slug,
      },
      select: returnProductObject,
    });

    if (!product) {
      throw new NotFoundException('product not found');
    }

    return product;
  }

  async byCategory(categorySlug: string) {
    const products = await this.prisma.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
      },
      select: returnProductObject,
    });

    if (!products) {
      throw new NotFoundException('products not found');
    }

    return products;
  }

  async getSimilar(id: number) {
    const currentProduct = await this.byId(id);

    if (!currentProduct) {
      throw new NotFoundException('Current product not found');
    }

    const products = await this.prisma.product.findMany({
      where: {
        category: {
          name: currentProduct.category.name,
        },
        NOT: {
          id: currentProduct.id,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: returnProductObject,
    });

    if (!products) {
      throw new NotFoundException('products not found');
    }

    return products;
  }

  async createProduct() {
    const product = await this.prisma.product.create({
      data: {
        description: '',
        name: '',
        price: 0,
        slug: '',
      },
    });

    return product.id;
  }

  async updateProduct(productId: number, dto: ProductDto) {
    const { description, images, price, name, categoryId } = dto;
    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return await this.prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        description,
        images,
        price,
        name,
        slug: generateSlug(dto.name),
        category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
  }

  async deleteProduct(productId: number) {
    return await this.prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}
