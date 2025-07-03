import { useDispatch } from "react-redux";
import { OPTIONSOBJ } from "../constants";
import { TMDB_MOVIE_SEARCH_API } from "../constants";
import { addSearchedTmdbMovies } from "../store/slice/movieSlice";

export const searchTmdbMovie = async (movieName, fullRaw) => {
  try {
    console.log(movieName);
    let queryName = movieName.split(" ").join("%20");
    console.log(queryName);
    const response = await fetch(
      TMDB_MOVIE_SEARCH_API +
        `?query=${queryName}&include_adult=false&language=en-US&page=1`,
      OPTIONSOBJ
    );
    const movieData = await response.json();
    console.log(movieData, "raw from tmdb search");
    if (fullRaw) return movieData?.results;
    return movieData?.results?.filter(
      (obj) => obj?.title?.toLowerCase() === movieName?.toLowerCase()
    );
  } catch (err) {
    console.log("error in searchTmdbMovie");
    throw err;
  }
};
