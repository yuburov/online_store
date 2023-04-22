import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { returnCategoryObject } from './return-category.object';
import { CategoryDto } from './dto';
import { generateSlug } from 'utils/generate-slug';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async byId(categoryId: number) {
    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      select: returnCategoryObject,
    });

    if (!category) {
      throw new NotFoundException('category not found');
    }

    return category;
  }

  async bySlug(slug: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        slug,
      },
      select: returnCategoryObject,
    });

    if (!category) {
      throw new NotFoundException('category not found');
    }

    return category;
  }

  async getAll() {
    return await this.prisma.category.findMany({
      select: returnCategoryObject,
    });
  }

  async createCategory() {
    return await this.prisma.category.create({
      data: {
        name: '',
        slug: '',
      },
    });
  }

  async updateCategory(categoryId: number, dto: CategoryDto) {
    return await this.prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        name: dto.name,
        slug: generateSlug(dto.name),
      },
    });
  }

  async deleteCategory(categoryId: number) {
    return await this.prisma.category.delete({
      where: {
        id: categoryId,
      },
    });
  }
}
