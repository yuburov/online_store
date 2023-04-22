import { instance } from '@/api/api.interceptor'
import { IFullUser, IUser } from '@/interfaces/user.interface'
import { UserData } from './user.interface'

const USERS = 'users'

export const UserService = {
  async getProfile() {
    return instance<IFullUser>({
      url: `${USERS}/profile`,
      method: 'GET',
    })
  },

  async updateProfile(data: UserData) {
    return instance<IUser>({
      url: `${USERS}/profile}`,
      method: 'PUT',
      data
    })
  },

  async toggleFavorite(productId: string | number) {
    return instance<IUser>({
      url: `${USERS}/profile/favorites/${productId}`,
      method: 'PATCH',
    })
  },
}

