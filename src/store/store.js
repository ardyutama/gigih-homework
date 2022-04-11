import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./token-slice";
import authReducer from "./auth-slice"
export default configureStore({
    reducer : {
        token: tokenReducer,
        auth : authReducer,
    }
})