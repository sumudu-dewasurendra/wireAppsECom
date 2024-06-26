import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from "@env"

export const productsApiSlice = createApi({ // Create API slice for fetching products
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products.json`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApiSlice