import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem } from '../API/api'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRest: builder.query<CardapioItem, void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetFeaturedRestQuery } = api

export default api
