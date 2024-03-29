import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const keysApi = createApi({
    reducerPath: 'keys',
    baseQuery: fetchBaseQuery({
        // Get preconfigured version of fetch
        baseUrl: import.meta.env.VITE_APP_API_ENDPOINT// root url
    }),
    endpoints(builder) {
        return {
            fetchKeys: builder.query({
                query: () => {
                    return {
                        url: '/keys',
                        method: 'GET'
                    }
                }
            }),
            fetchKey: builder.query({
                query: (keyId) => {
                    return {
                        url: `/keys/${keyId}`,
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchKeysQuery, useFetchKeyQuery } = keysApi;
export { keysApi }