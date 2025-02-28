import type { Product } from '~/types'

export default defineEventHandler(async event => {
    await new Promise(resolve => setTimeout(resolve, 3000))

    const products: Product[] = Array.from({ length: 80 }, (v, k) => {
        return {
            id: 85,
            name: "Minijupe-culotte denim plissée",
            color: "Black",
            sku: "",
            model_height: "",
            model_size: "",
            category: "Skirts",
            sub_category: "Not attributed",
            sizes: [
                {
                    id: Math.random(),
                    name: "XS",
                    availability: true,
                }
            ],
            has_sizes: false,
            get_price: "29.99",
            collection_set: [
                {
                    id: Math.random(),
                    name: "Skirts",
                    category: "Skirts",
                    sub_category: "Not attributed",
                    number_of_items: 10,
                    illustration: "/ecommerce/img1.jpg",
                    tags: null,
                    get_view_name: "skirts"
                }
            ],
            get_main_image: {
                id: Math.random(),
                name: "Minijupe-culotte denim plissée",
                product_set: [
                    {
                        id: Math.random(),
                        name: "Product set"
                    }
                ],
                original: "/ecommerce/img1.jpg",
                thumbnail: "/ecommerce/img1.jpg",
                mid_size: "/ecommerce/img1.jpg",
                is_main_image: false
            },
            color_variant_name: "Red",
            is_new: false,
            variants: [
                {
                    id: Math.random(),
                    active: true,
                    color: "Red",
                    get_main_image: {
                        id: Math.random(),
                        name: "Minijupe-culotte denim plissée",
                        product_set: [
                            {
                                id: Math.random(),
                                name: "Product set"
                            }
                        ],
                        original: "/ecommerce/img1.jpg",
                        thumbnail: "/ecommerce/img1.jpg",
                        mid_size: "/ecommerce/img1.jpg",
                        is_main_image: false
                    }
                }
            ],
            images: [
                {
                    id: Math.random(),
                    name: "Minijupe-culotte denim plissée",
                    original: "/ecommerce/img1.jpg",
                    thumbnail: "/ecommerce/img1.jpg",
                    mid_size: "/ecommerce/img1.jpg",
                    product_set: [
                        {
                            id: Math.random(),
                            name: "Product set"
                        }
                    ],
                    is_main_image: false
                }
            ],
            video: "",
            unit_price: "29,99",
            sale_value: 0,
            sale_price: "0,00",
            on_sale: false,
            display_new: false,
            slug: "minijupe-culotte-denim-plissee-black-16931",
            active: true,
            modified_on: "2025-02-25",
            created_on: "2025-02-25"
        }
    })

    return {
        products
    }
})
