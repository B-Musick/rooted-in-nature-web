import { nanoid } from '@reduxjs/toolkit';
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
                providesTags: (results, error, plant) => {
                    const tags = results.map(plant => {
                        return { type: 'Plants', id: plant.id }
                    })
                    return tags;
                },
                query: () => {
                    return {
                        url: '/plants',
                        method: 'GET'
                    }
                }
            }),
            fetchPlant: builder.query({
                query: (plantId) => {
                    return {
                        url: `/plants/${plantId}`,
                        method: 'GET'
                    }
                }
            }),
            addPlant: builder.mutation({
                invalidatesTags: ['Plants'],
                query: (plant)=>{
                    // Tell RTK 
                    return {
                        url: 'plants', 
                        method: 'POST',
                        body: {
                            id: nanoid(),
                            ...plant
                        }
                    }
                }
            }),
            removePlant: builder.mutation({
                invalidatesTags: (results, error, plant)=>{
                    return [{type: 'Plants', id: plant.id}]
                },
                query: (plant) => {
                    return {
                        url: `/plants/${plant.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            editPlant: builder.mutation({
                invalidatesTags: (results, error, plant) => {
                    return [{ type: 'Plants', id: plant.id }]
                },
                query: (plant) => {
                    return {
                        url: `/plants/${plant.id}`,
                        method: 'PATCH',
                        body: plant
                    }
                }
            })
        }
    }
})

export const { 
    useFetchPlantsQuery, 
    useFetchPlantQuery, 
    useAddPlantMutation,
    useRemovePlantMutation,
    useEditPlantMutation
} = plantsApi;
export { plantsApi }