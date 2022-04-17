import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token-slice";
import authReducer from "./auth-slice";

export const store = configureStore({
    reducer : {
        token: tokenReducer,
        auth : authReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch