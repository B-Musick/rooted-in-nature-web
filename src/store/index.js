import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { plantsReducer } from './slices/plantsSlice';

import { trefleApi } from "./apis/trefleApi"; // creates a slice
import { keysApi } from "./apis/keysApi";

const store = configureStore({
    reducer: {
        plants: plantsReducer,
        [trefleApi.reducerPath]: trefleApi.reducer,
        [keysApi.reducerPath]: keysApi.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(trefleApi.middleware).concat(keysApi.middleware)
})

setupListeners(store.dispatch);

export { store }
export { useFetchPlantsQuery } from './apis/trefleApi';
export { useFetchKeysQuery } from './apis/keysApi';