import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currencyHeaders = {
    'x-rapidapi-host': 'currency-exchange.p.rapidapi.com',
    'x-rapidapi-key': '7dd7f83cb9msh9de5fbe5bdaa21fp13d897jsn6ce0dd0be64a'
};

const createRequest = (url) => ({ url, headers: currencyHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;