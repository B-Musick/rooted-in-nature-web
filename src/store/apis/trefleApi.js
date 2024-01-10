import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const trefleApi = createApi({
    reducerPath: 'api', 
    baseQuery: fetchBaseQuery({
        // Get preconfigured version of fetch
        baseUrl: import.meta.env.VITE_APP_TREFLE_API_ENDPOINT, // root url
        prepareHeaders: (headers, { getState }) => {
            // const token = (getState()).auth.token
            const token = import.meta.env.VITE_APP_JWT_TOKEN;
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints(builder) {
        return {
            fetchPlants: builder.query({
                query: (searchTerm) => {
                    return {
                        url: 'plants/search',
                        params: {
                            q: searchTerm
                        },
                        method: 'GET'
                    }
                },
                transformResponse: (response)=>{
                    return response.data.map((plant) => {
                        return {
                            ...plant,
                            species: plant.scientific_name.split(' ')[1],
                            commonName: plant.common_name,
                            imageUrl: plant.image_url
                        }
                    });
                }
            })
        }
    }
})

export const { useFetchPlantsQuery } = trefleApi;
export { trefleApi }