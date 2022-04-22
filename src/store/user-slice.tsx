import { createSlice } from "@reduxjs/toolkit"
interface userState {
    value: string
}

const initialState : userState = {
    value : ''
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getUserId: (state,action) => {
            state.value = action.payload;
        },
    }
});

export const {getUserId} = userSlice.actions;
export default userSlice.reducer;