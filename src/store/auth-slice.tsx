import { createSlice } from "@reduxjs/toolkit"
interface authState {
    isLogin: boolean
}

const initialState : authState = {
    isLogin : false
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state) => {
            state.isLogin = true;
        },
        logout: (state) => {
            state.isLogin = false;
        },
    }
});

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;