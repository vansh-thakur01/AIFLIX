import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesSlice from "./slice/movieSlice";
import GtpReducer from "./slice/gptSlice";
import configReducer from "./slice/configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesSlice,
    gpt: GtpReducer,
    config: configReducer,
  },
});

export default store;
