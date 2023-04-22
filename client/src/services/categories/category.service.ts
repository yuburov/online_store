import { instance, $api } from '@/api/api.interceptor';
import { ICategory } from '@/interfaces/category.interface'

const CATEGORIES = 'categories'

export const CategoryService = {
  async getAll() {
    return $api<ICategory[]>({
      url: CATEGORIES,
      method: 'GET',
    })
  },

  async getById(id: string | number) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'GET',
    })
  },

  async getBySlug(slug: string) {
    return $api<ICategory>({
      url: `${CATEGORIES}/by-slug/${slug}`,
      method: 'GET',
    })
  },

  async create() {
    return instance<ICategory>({
      url: `${CATEGORIES}`,
      method: 'POST',
    })
  },

  async update(id: string | number, name: string) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'PUT',
      data: {name}
    })
  },

  async delete(id: string | number) {
    return instance<ICategory>({
      url: `${CATEGORIES}/${id}`,
      method: 'DELETE',
    })
  },
}

