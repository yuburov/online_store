import { IProduct } from '@/interfaces/product.interface'

export interface ProductData {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export interface IDataFilters {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}


