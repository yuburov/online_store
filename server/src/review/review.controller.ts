import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { ReviewDto } from './dto';

@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Public()
  @Get()
  getAll() {
    return this.reviewService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @Post('leave/:productId')
  getBySlug(
    @GetCurrentUserId() userId: number,
    @Body() dto: ReviewDto,
    @Param('productId') productId: string,
  ) {
    return this.reviewService.leaveReview(userId, dto, +productId);
  }

  @Public()
  @Get('average-by-product/:productId')
  getAverageByProduct(@Param('productId') productId: string) {
    return this.reviewService.getAverageValueProductId(+productId);
  }
}
