import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './state/auth/authApi.ts';
import { userApi } from './state/user/userApi.ts'
import userReducer from './state/user/userSlice.ts';
import authSlice from "@/state/auth/authSlice.ts";
export const store = configureStore({
    reducer: {
        //Api for user auth (you can use it with cookies or with tokens)
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        user: userReducer,
        auth: authSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware).concat(userApi.middleware)
})
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;