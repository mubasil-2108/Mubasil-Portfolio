'use client'
import { configureStore } from "@reduxjs/toolkit";

// Authentication
import authReducer from './auth-slice'

// Admin
import adminProjectReducer from './project-slice'


const store = configureStore({
    reducer:{
        auth: authReducer,
        adminProject: adminProjectReducer
    }
})

// ✅ Add these exports
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;