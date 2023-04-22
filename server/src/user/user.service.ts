import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { returnUserObject } from './return-user.object';
import { Prisma } from '@prisma/client';
import { UserDto } from './dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async byId(userId: number, selectObject: Prisma.UserSelect = {}) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        ...returnUserObject,
        favorites: {
          select: {
            id: true,
            name: true,
            price: true,
            images: true,
            slug: true,
            category: {
              select: {
                slug: true,
              },
            },
            reviews: true,
          },
        },
        ...selectObject,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateProfile(userId: number, dto: UserDto) {
    const isSameUser = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (isSameUser && userId !== isSameUser.id) {
      throw new BadRequestException('This email address is already in use');
    }

    const user = await this.byId(userId);

    return this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        email: dto.email,
        name: dto.name,
        avatarPath: dto.avatarPath,
        hash: dto.password ? await hash(dto.password, 10) : user.hash,
      },
    });
  }

  async toggleFavorite(userId: number, productId: number) {
    const user = await this.byId(userId);

    if (!user) throw new NotFoundException('User not found');

    const isExist = user.favorites.some((product) => product.id === productId);

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        favorites: {
          [isExist ? 'disconnect' : 'connect']: {
            id: productId,
          },
        },
      },
    });

    return { message: 'Success' };
  }
}
