import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    { id: nanoid(), genus: 'populous', species: 'tremuloides', family:'populaceae', petals: '2', sepals:'2' },
    { id: nanoid(), genus: 'betula', species: 'tra', family: 'betulaceae', petals: '3', sepals: '2' },
]

const plantsSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {}
})

export const plantsReducer = plantsSlice.reducer;