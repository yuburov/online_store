import { $api, instance } from '../../api/api.interceptor'
import { IReview } from '../../interfaces/review.interface'
import { ReviewData } from './interfaces/review.interface'

const REVIEWS = 'reviews'

export const ReviewService = {
	async getAll() {
		return $api<IReview[]>({
			url: REVIEWS,
			method: 'GET'
		})
	},

	async getAverageByProduct(productId: string | number) {
		return $api<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET'
		})
	},

  async leave(productId: string | number, data: ReviewData) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
      data
		})
	},

	async getById(id: string | number) {
		return instance<IReview>({
			url: `${REVIEWS}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return instance<IReview>({
			url: `${REVIEWS}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IReview>({
			url: `${REVIEWS}`,
			method: 'POST'
		})
	},

	async update(id: string | number, name: string) {
		return instance<IReview>({
			url: `${REVIEWS}/${id}`,
			method: 'PUT',
			data: { name }
		})
	},

	async delete(id: string | number) {
		return instance<IReview>({
			url: `${REVIEWS}/${id}`,
			method: 'DELETE'
		})
	}
}
