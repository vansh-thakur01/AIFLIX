import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import moviesSlice from "./movieSlice"
import GtpReducer from "./gptSlice"
import configReducer from "./configSlice"

const store = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesSlice,
        gpt:GtpReducer,
        config:configReducer
    }
})

export default store