import { instance, $api } from '@/api/api.interceptor';
import { IPaginationProduct, IProduct } from '@/interfaces/product.interface'
import { IDataFilters, ProductData } from './product.interface';

const PRODUCTS= 'products'

export const ProductService = {
  async getAll(queryData = {} as IDataFilters) {
    const { data } = await $api<IPaginationProduct>({
      url: PRODUCTS,
      method: 'GET',
      params: queryData
    })

    return data
  },

  async getSimilar(id: string | number) {
    return $api<IProduct[]>({
      url: `${PRODUCTS}/similar/${id}`,
      method: 'GET',
    })
  },

  async getById(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'GET',
    })
  },

  async getBySlug(slug: string) {
    return $api<IProduct>({
      url: `${PRODUCTS}/by-slug/${slug}`,
      method: 'GET',
    })
  },

  async getByCategory(categorySlug: string) {
    return $api<IProduct[]>({
      url: `${PRODUCTS}/by-category/${categorySlug}`,
      method: 'GET',
    })
  },

  async create() {
    return instance<IProduct>({
      url: `${PRODUCTS}`,
      method: 'POST',
    })
  },

  async update(id: string | number, data: ProductData) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'PUT',
      data
    })
  },

  async delete(id: string | number) {
    return instance<IProduct>({
      url: `${PRODUCTS}/${id}`,
      method: 'DELETE',
    })
  }
}

