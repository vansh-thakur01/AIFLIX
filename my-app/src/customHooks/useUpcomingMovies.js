import { useDispatch, useSelector } from "react-redux";
import { OPTIONSOBJ, UPCOMING_MOVIES_API } from "../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/store/slice/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getMovies = async function () {
    try {
      console.log("upo");
      const response = await fetch(UPCOMING_MOVIES_API+"?language=en-US&page=1", OPTIONSOBJ);
      const data = await response.json();
      console.log(data,"up");
      dispatch(addUpcomingMovies(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    !upcomingMovies?.length && getMovies();
  }, []);
};
