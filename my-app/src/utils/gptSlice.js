import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        aiMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addAiMoviesResult:(state,action)=>{
            state.aiMovies = action.payload
        }
    }
})

export const {toggleGptSearchView, addAiMoviesResult} = gtpSlice.actions;
export default gtpSlice.reducer;