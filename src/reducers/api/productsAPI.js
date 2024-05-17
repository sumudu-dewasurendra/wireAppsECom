import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/'
export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products.json`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApiSlice