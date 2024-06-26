import { configureStore } from "@reduxjs/toolkit";
import daySlise from "./slice/daySlise";


export const store = configureStore({
    reducer:{
        day: daySlise
    },
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch