import { configureStore } from "@reduxjs/toolkit";

import { plantsReducer } from './slices/plantsSlice';

const store = configureStore({
    reducer: {
        plants: plantsReducer
    }
})

export { store }