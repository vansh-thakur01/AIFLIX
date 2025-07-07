import { OPTIONSOBJ } from "../constants";
import { TMDB_MOVIE_SEARCH_API } from "../constants";

export const searchTmdbMovie = async (movieName, fullRaw) => {
  try {
    let queryName = movieName.split(" ").join("%20");
    const response = await fetch(
      TMDB_MOVIE_SEARCH_API +
        `?query=${queryName}&include_adult=false&language=en-US&page=1`,
      OPTIONSOBJ
    );
    const movieData = await response.json();
    if (fullRaw) return movieData?.results;
    return movieData?.results?.filter(
      (obj) => obj?.title?.toLowerCase() === movieName?.toLowerCase()
    );
  } catch (err) {
    console.log("error in searchTmdbMovie",err);
    throw err;
  }
};
