import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TokenState  {
    value : string
}

const initialState : TokenState = {
   value: ''
}

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        token: (state,action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    }
});

export const {token} = tokenSlice.actions;
export default tokenSlice.reducer;