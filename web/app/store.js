import { configureStore } from '@reduxjs/toolkit';
import stageReducer from '../app/features/canvas/stageSlice';
import selectReducer from '../app/features/canvas/selectSlice'
export const store = configureStore({
    reducer : {
        stage : stageReducer,
        selected : selectReducer
    }
})