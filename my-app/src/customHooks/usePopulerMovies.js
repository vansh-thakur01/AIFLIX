import { useDispatch, useSelector } from "react-redux";
import { OPTIONSOBJ, POPULAR_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/store/slice/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const polularMovies = useSelector((store) => store.movies.popularMoveis);

  const getMovies = async function () {
    try {
      const response = await fetch(POPULAR_MOVIES_API+"?language=en-US&page=1", OPTIONSOBJ);
      const data = await response.json();
      dispatch(addPopularMovies(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    !polularMovies?.length && getMovies();
  }, []);
};
