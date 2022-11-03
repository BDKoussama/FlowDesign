import { configureStore } from '@reduxjs/toolkit';
import stageReducer from '../app/features/canvas/stageSlice';

export const store = configureStore({
    reducer : {
        stage : stageReducer
    }
})