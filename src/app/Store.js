import {configureStore} from '@reduxjs/toolkit'
import {todoReducer} from '../fearures/todo/todoslice'

export const store = configureStore({
    reducer: todoReducer
});

