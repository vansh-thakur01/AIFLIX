import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        movieTrailer:null,
    },

    reducers:{
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

export const {addNowPlayingMovies , addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies,removeMovieTrailer}  = movieSlice.actions;
export default movieSlice.reducer; 