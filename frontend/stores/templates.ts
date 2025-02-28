import type { Product, ProductApiResponse } from "~/types"

export const useTemplates = defineStore('templates', () => {
    const cachedResponse = ref<ProductApiResponse>()
    const currentProduct = ref<Product>()

    const products = computed(() => cachedResponse.value?.results || [])

    return {
        products,
        cachedResponse,
        currentProduct
    }
})
