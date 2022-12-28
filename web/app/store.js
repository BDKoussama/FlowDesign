import { configureStore } from '@reduxjs/toolkit';
import stageReducer from '../app/features/canvas/stageSlice';
import selectReducer from '../app/features/canvas/selectSlice'
import uploadReducer from '../app/features/canvas/uploadSlice';

export const store = configureStore({
    reducer : {
        stage : stageReducer,
        selected : selectReducer,
        uploads : uploadReducer
    }
})