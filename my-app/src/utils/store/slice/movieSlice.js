import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    bgTrailer: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    movieTrailer: null,
    searchedTmdbMovies:null,
  },

  reducers: {
    addSearchedTmdbMovies: (state, action) => {
      state.searchedTmdbMovies = action.payload;
    },
    removeSearchedTmdbMovies: (state) => {
      state.searchedTmdbMovies = null;
    },
    addBgTrailer: (state, action) => {
      state.bgTrailer = action.payload;
    },
    addNowPlayingMovies: (state, action) => {
      if (state.nowPlayingMovies) {
        let prev = state.nowPlayingMovies.results;
        let curr = action.payload.results;
        state.nowPlayingMovies.results = [...prev, ...curr];
        state.nowPlayingMovies.page++;
      }
      else state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      if(state.popularMovies){
        let prev = state.popularMovies.results
        let curr = action.payload.results;
        state.popularMovies.results = [...prev,...curr];
        state.popularMovies.page++;
      }
      else state.popularMovies = action.payload;
    },

    addTopRatedMovies: (state, action) => {
      if (state.topRatedMovies) {
        let prev = state.topRatedMovies.results;
        let curr = action.payload.results;
        state.topRatedMovies.results = [...prev, ...curr];
        state.topRatedMovies.page++;
      } else state.topRatedMovies = action.payload;
    },

    addUpcomingMovies: (state, action) => {
      if (state.upcomingMovies) {
        let prev = state.upcomingMovies.results;
        let curr = action.payload.results;
        state.upcomingMovies.results = [...prev, ...curr];
        state.upcomingMovies.page++;
      }
      else state.upcomingMovies = action.payload;
    },

    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    removeMovieTrailer: (state) => {
      state.movieTrailer = null;
    },
  },
});

export const {addNowPlayingMovies , addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies,removeMovieTrailer, addBgTrailer, addSearchedTmdbMovies, removeSearchedTmdbMovies}  = movieSlice.actions;
export default movieSlice.reducer; 