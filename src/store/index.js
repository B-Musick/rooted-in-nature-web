import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { plantsReducer } from './slices/plantsSlice';

import { trefleApi } from "./apis/trefleApi"; // creates a slice
import { keysApi } from "./apis/keysApi";
import { plantsApi } from "./apis/plantsApi";

const store = configureStore({
    reducer: {
        plants: plantsReducer,
        [trefleApi.reducerPath]: trefleApi.reducer,
        [keysApi.reducerPath]: keysApi.reducer,
        [plantsApi.reducerPath]: plantsApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(trefleApi.middleware)
            .concat(keysApi.middleware)
            .concat(plantsApi.middleware)
})

setupListeners(store.dispatch);

export { store }
export { useFetchApiPlantsQuery } from './apis/trefleApi';
export { useFetchKeysQuery, useFetchKeyQuery } from './apis/keysApi';
export { 
    useFetchPlantsQuery, 
    useFetchPlantQuery, 
    useAddPlantMutation, 
    useRemovePlantMutation,
    useEditPlantMutation
} from './apis/plantsApi';