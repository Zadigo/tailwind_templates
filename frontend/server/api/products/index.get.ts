import { products } from '~/data/products'
import type { ProductApiResponse } from '~/types'

export default defineEventHandler(async event => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const data: ProductApiResponse =  {
        count: 10,
        results: products
    }

    return data
})
