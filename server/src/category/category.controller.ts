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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';
import { Public } from '../common/decorators';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Public()
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @Public()
  @Get('by-slug/:slug')
  getBySlug(@Param('slug') slug: string) {
    return this.categoryService.bySlug(slug);
  }

  @Public()
  @Get(':categoryId')
  getById(@Param('categoryId') categoryId: string) {
    return this.categoryService.byId(+categoryId);
  }

  @Post()
  @HttpCode(HttpStatus.OK)
  createCategory() {
    return this.categoryService.createCategory();
  }

  @UsePipes(new ValidationPipe())
  @Put(':categoryId')
  @HttpCode(HttpStatus.OK)
  updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() dto: CategoryDto,
  ) {
    return this.categoryService.updateCategory(+categoryId, dto);
  }

  @Delete(':categoryId')
  @HttpCode(HttpStatus.OK)
  deleteCategory(@Param('categoryId') categoryId: string) {
    return this.categoryService.deleteCategory(+categoryId);
  }
}
