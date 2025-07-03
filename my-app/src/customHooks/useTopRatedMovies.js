import { useDispatch, useSelector } from "react-redux";
import { OPTIONSOBJ, TOP_RATED_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/store/slice/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getMovies = async function () {
    try {
      const response = await fetch(TOP_RATED_MOVIES_API, OPTIONSOBJ);
      const data = await response.json();
      dispatch(addTopRatedMovies(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    !topRatedMovies && getMovies();
  }, []);
};
