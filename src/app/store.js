import {configureStore} from '@reduxjs/toolkit'
import orangeReducer from '../features/todo/todoSlice'
import orangeSlice from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:{todo:orangeReducer}
})