import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { OrderDto, PaymentStatusDto } from './dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAll(@GetCurrentUserId() userId: number) {
    return this.orderService.getAll(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  @Post()
  placeOrder(@Body() dto: OrderDto, @GetCurrentUserId() userId: number) {
    return this.orderService.placeOrder(dto, userId);
  }

  @Public()
  @Post('status')
  @HttpCode(HttpStatus.OK)
  updateStatus(@Body() dto: PaymentStatusDto) {
    return this.orderService.updateStatus(dto);
  }
}
