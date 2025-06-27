import { useDispatch } from "react-redux";
import { OPTIONSOBJ, UPCOMING_MOVIES_API } from "../utils/config";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async function () {
    try {
      const response = await fetch(UPCOMING_MOVIES_API, OPTIONSOBJ);
      const data = await response.json();
      dispatch(addUpcomingMovies(data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
};
