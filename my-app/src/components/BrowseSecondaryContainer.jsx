import { useSelector } from "react-redux";
import MovieList from "./MovieList"

const BrowseSecondaryContainer = () => {
  let nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
  let popularMovies = useSelector(store  => store.movies.popularMovies);
  let topRatedMovies = useSelector(store  => store.movies.topRatedMovies);
  let upcomingMovies = useSelector(store  => store.movies.upcomingMovies);
  // console.log(nowPlaying,"sdfdgfasudygfyugyguygoiugu")

  if(!nowPlaying  || !popularMovies || !topRatedMovies || !upcomingMovies) return;

  return (
    <div className="bg-gray-950">
      <div className="relative z-9 -mt-40 ">
        <MovieList title={"Now Plating"} movies={nowPlaying.results}/>
        <MovieList title={"Trending Now"  } movies={popularMovies.results}/>
        <MovieList title={"Top Rated "} movies={topRatedMovies.results}/>
        <MovieList title={"Upcoming"} movies={upcomingMovies.results}/>
      </div>
    </div>
  )
}

export default BrowseSecondaryContainer