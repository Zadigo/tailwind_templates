import { products } from '~/data/products'

export default defineEventHandler(async event => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    const id  = getRouterParam(event, 'id')
    const product = products.find(product => product.id === (id * 1))
    
    if (!product) {
        throw createError('Product does not exist')
    } else {
        return product
    }
})
