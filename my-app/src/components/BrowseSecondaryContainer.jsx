import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstant"
import { AiMovieList } from "./aiMovieList";
import { MovieListShimmer } from "./shimmerUi/MovieListShimmer";

const BrowseSecondaryContainer = () => {
  const fackMovieCategory = new Array(4).fill()
  const currLang = useSelector(store => store.config.lang);
  let nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  let popularMovies = useSelector(store  => store.movies.popularMovies);
  let topRatedMovies = useSelector(store  => store.movies.topRatedMovies);
  let upcomingMovies = useSelector(store  => store.movies.upcomingMovies);
  console.log(nowPlaying,"sdfdgfasudygfyugyguygoiugu")

  if(!nowPlaying  || !popularMovies || !topRatedMovies || !upcomingMovies){ 
    return (
    <div className="bg-gray-950">
      <div className="relative z-9 -mt-40 ">
        {fackMovieCategory.map(fack=> <MovieListShimmer/>)}
      </div>
    </div>);
  }

  return (
    <div className="bg-gray-950">
      <div className="relative z-9 -mt-40 ">
        <AiMovieList/>
        <MovieList title={lang[currLang].NowPlaying} movies={nowPlaying.results}/>
        <MovieList title={lang[currLang].TrendingNow  } movies={popularMovies.results}/>
        <MovieList title={lang[currLang].TopRated} movies={topRatedMovies.results}/>
        <MovieList title={lang[currLang].Upcoming} movies={upcomingMovies.results}/>
      </div>
    </div>
  )
}

export default BrowseSecondaryContainer