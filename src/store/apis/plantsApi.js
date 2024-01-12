import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const plantsApi = createApi({
    reducerPath: 'plants',
    baseQuery: fetchBaseQuery({
        // Get preconfigured version of fetch
        baseUrl: import.meta.env.VITE_APP_API_ENDPOINT// root url
    }),
    endpoints(builder) {
        return {
            fetchPlants: builder.query({
                query: () => {
                    return {
                        url: '/plants',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { useFetchPlantsQuery } = plantsApi;
export { plantsApi }