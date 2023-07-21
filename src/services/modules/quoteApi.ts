import Config from 'react-native-config';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

export interface Quote {
  text: string;
  author: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "https://stoic-quotes.com/api",
});

const baseQueryWithInterceptor: BaseQueryFn<
string | FetchArgs,
unknown,
FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
  }
  return result;
};


export const quoteApi = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: (build) => ({
    fetchOne: build.query<Quote, void>({
      query: () => '/quote',
    }),
  }),
});

export const { useFetchOneQuery } = quoteApi;