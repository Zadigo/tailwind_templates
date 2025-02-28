// // export interface Product {
// //     id: number | string
// //     name: string
// //     color: string
// //     sku: string
// //     model_height: string
// //     model_size: string
// //     category: string
// //     sub_category: string
// //     images: null
// //     video: string | null
// //     unit_price: number | string
// //     sale_value: number | string
// //     sale_price: number | string
// //     on_sale: number | string
// //     display_new: number | string
// //     slug: string
// //     active: boolean
// //     modified_on: string
// //     created_on: string
// // }


// export type ProductSizes = {
//     id: number;
//     name: string;
//     availability: boolean;
// };

// declare type ProductSet = {
//     id: number;
//     name: string;
// };

// export type ProductImage = {
//     id: number;
//     name: string;
//     product_set: ProductSet[];
//     original: string;
//     thumbnail: string;
//     mid_size: string;
//     is_main_image: boolean;
// };

// export interface ProductVariant {
//     id: number
//     color: string
//     get_main_image: ProductImage
//     active: boolean
// }

// export type ProductCollection = {
//     id: number;
//     name: string;
//     category: string;
//     sub_category: string;
//     number_of_items: number;
//     illustration: string | null;
//     tags: string[] | null;
//     get_view_name: string;
// };

// export type Product = {
//     id: number;
//     name: string;
//     color: string;
//     category: string;
//     sub_category: string;
//     sizes: ProductSizes[];
//     has_sizes: boolean;
//     unit_price: string
//     get_price: string;
//     sale_value: number;
//     sale_price: string;
//     on_sale: boolean;
//     collection_set: ProductCollection[] | null;
//     get_main_image: ProductImage;
//     images: ProductImage[] | null;
//     model_height: string
//     model_size: string
//     color_variant_name: string;
//     is_new: boolean;
//     active: boolean;
//     display_new: boolean;
//     slug: string;
//     variants: ProductVariant[]
//     modified_on: string;
//     created_on: string;
// };

export interface Product {
    id: number
    name: string
    model_height: string | null
    model_size: string | null
    unit_price: string
    sale_value: string
    sale_price: string
    on_sale: boolean
    get_main_image: {
        id: number;
        name: string;
        original: string;
    },
    images: {
        id: number;
        name: string;
        original: string;
    }[],
    sizes: {
        id: number
        name: string
        availability: boolean
    }[]
}

export interface ProductApiResponse {
    count: number
    results: Product[]
}
