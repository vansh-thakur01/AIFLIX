import { createSlice } from "@reduxjs/toolkit";

const userRedux = createSlice({
    name:"user",
    initialState:null,
    reducers:{
        addUser:(state, action)=>{
            return action.payload;
        },
        removeUser:()=>{
            return null;
        }
    }
})

export const {addUser, removeUser} =  userRedux.actions;
export default userRedux.reducer;