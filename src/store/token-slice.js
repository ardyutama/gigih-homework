import { createSlice } from "@reduxjs/toolkit"

export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        value: '',
    },
    reducers: {
        token: (state,action) => {
            state.value = action.payload;
        },
    }
});

export const {token} = tokenSlice.actions;
export default tokenSlice.reducer;