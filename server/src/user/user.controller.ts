import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetCurrentUserId } from '../common/decorators';
import { UserDto } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @HttpCode(HttpStatus.OK)
  getProfile(@GetCurrentUserId() userId: number) {
    return this.userService.byId(userId);
  }

  @UsePipes(new ValidationPipe())
  @Put('profile')
  @HttpCode(HttpStatus.OK)
  updateProfile(@GetCurrentUserId() userId: number, @Body() dto: UserDto) {
    return this.userService.updateProfile(userId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('profile/favorites/:productId')
  toggleFavorite(
    @GetCurrentUserId() userId: number,
    @Param('productId') productId: string,
  ) {
    return this.userService.toggleFavorite(userId, +productId);
  }
}
