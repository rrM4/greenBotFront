import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState : { timesTried: number, email: string} = {
    timesTried : 0,
    email: ""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTimesTried(state : { timesTried : number}, action : PayloadAction<number>){
            state.timesTried += action.payload
        },
        setEmail(state: {timesTried: number, email: string}, action: PayloadAction<string>){
            state.email = action.payload
        }
    }
})

export const {
    setEmail,
    setTimesTried
} = authSlice.actions;
export default authSlice.reducer;