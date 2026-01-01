//the entire story starts here now we are creating a source of truth
//now we are creating it using og redux library
import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/todo/todoSlice.js'

// here configuration store is a mthod which takes an objcet as parameter
export const store = configureStore({
    reducer:todoReducers
})