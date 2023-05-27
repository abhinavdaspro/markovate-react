import { configureStore } from '@reduxjs/toolkit'
import skillReducer from './reducers/skillReducer'

export const store = configureStore({
    reducer: {
        skills: skillReducer
    },
})