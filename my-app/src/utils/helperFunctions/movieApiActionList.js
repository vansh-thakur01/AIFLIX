import {
  addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcomingMovies
} from "../store/slice/movieSlice";

import {
  NOW_PLAYING_MOVIES_API,
  POPULAR_MOVIES_API,
  TOP_RATED_MOVIES_API,
  UPCOMING_MOVIES_API,
} from "../constants";


export const MovieApiList = {
  nowPlaying: { link: NOW_PLAYING_MOVIES_API, action: addNowPlayingMovies },
  popular: { link: POPULAR_MOVIES_API, action: addPopularMovies },
  topRated: { link: TOP_RATED_MOVIES_API, action: addTopRatedMovies },
  upcoming: { link: UPCOMING_MOVIES_API, action: addUpcomingMovies },
};
