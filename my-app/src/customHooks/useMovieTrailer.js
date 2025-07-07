import { useDispatch, useSelector } from "react-redux";
import { OPTIONSOBJ } from "../utils/constants";
import { addMovieTrailer } from "../utils/store/slice/movieSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async function (movieId) {
    console.log("here");
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      OPTIONSOBJ
    );
    const data = await response.json();
    console.log(data,"trailer");
    const filter = data.results.filter((obj) => obj.type === "Trailer");
    const trailer = filter[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);
};

export default useMovieTrailer;
