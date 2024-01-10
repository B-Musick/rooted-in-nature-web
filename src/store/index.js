import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { plantsReducer } from './slices/plantsSlice';

import { trefleApi } from "./apis/trefleApi"; // creates a slice

const store = configureStore({
    reducer: {
        plants: plantsReducer,
        [trefleApi.reducerPath]: trefleApi.reducer 
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(trefleApi.middleware)
})

setupListeners(store.dispatch);

export { store }
export { useFetchPlantsQuery } from './apis/trefleApi'