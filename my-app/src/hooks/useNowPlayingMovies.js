import { useDispatch } from "react-redux";
import { MOVIES_API, OPTIONSOBJ } from "../utils/config";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";


export const useNowPlayingMiveis = () => {
    const dispatch = useDispatch();
    const getMovies = async function () {
      try {
        const response = await fetch(MOVIES_API, OPTIONSOBJ);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data));
      }
       catch (err) {
        console.log(err.message);
      }
    };
    
    useEffect(() => {
      getMovies();
    }, []);
}  

