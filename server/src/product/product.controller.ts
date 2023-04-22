import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { GetAllProductDto, ProductDto } from './dto';
import { Public } from 'src/common/decorators';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Public()
  @UsePipes(new ValidationPipe())
  @Get()
  getAll(@Query() queryDto: GetAllProductDto) {
    return this.productService.getAll(queryDto);
  }

  @Public()
  @Get('similar/:id')
  getSimilar(@Param('id') id: string) {
    return this.productService.getSimilar(+id);
  }

  @Public()
  @Get('by-slug/:slug')
  getProductBySlug(@Param('slug') slug: string) {
    return this.productService.bySlug(slug);
  }

  @Public()
  @Get('by-category/:categorySlug')
  getById(@Param('categorySlug') categorySlug: string) {
    return this.productService.byCategory(categorySlug);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(HttpStatus.OK)
  createProduct() {
    return this.productService.createProduct();
  }

  @UsePipes(new ValidationPipe())
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateProduct(@Param('id') id: string, @Body() dto: ProductDto) {
    return this.productService.updateProduct(+id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(+id);
  }
}
