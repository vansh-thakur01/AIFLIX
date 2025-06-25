import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesSlice from "./movieSlice"

const store = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesSlice
    }
})

export default store