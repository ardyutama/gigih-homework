import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: '',
    },
    reducers: {
        login: (state,action) => {
            state.isLogin = true;
        },
        logout: (state,action) => {
            state.isLogin = false;
        },
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;