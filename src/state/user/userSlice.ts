import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type IUser } from "../../../interfaces.ts";

const initialState : IUser = {
    email: "",
    name: "",
    isVerified: false,
    googleId: "",
    facebookId: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setEmail(state: IUser, action : PayloadAction<string>){
            state.email = action.payload;
        },
        setUser(_,action: PayloadAction<IUser>){
            return action.payload;
        }
    }
})

export const {
    setEmail,
    setUser
} = userSlice.actions;
export default userSlice.reducer;