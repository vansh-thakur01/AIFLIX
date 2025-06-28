import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        bgTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieTrailer:null,
    },

    reducers:{
        addBgTrailer:(state, action)=>{
            state.bgTrailer = action.payload;
        },
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies =  action.payload;
        },
        
        addPopularMovies:(state,action)=>{
            state.popularMovies =  action.payload;
        },
        
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies =  action.payload;
        },
        
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies =  action.payload;
        },
        
        addMovieTrailer:(state,action)=>{
            state.movieTrailer = action.payload;
        },
        removeMovieTrailer:(state)=>{
            state.movieTrailer = null;
        }
    }
})

export const {addNowPlayingMovies , addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies,removeMovieTrailer, addBgTrailer}  = movieSlice.actions;
export default movieSlice.reducer; 