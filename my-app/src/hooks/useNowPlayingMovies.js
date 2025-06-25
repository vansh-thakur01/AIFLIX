import { useDispatch } from "react-redux";
import { MOVIES_API, OPTIONSOBJ } from "../utils/config";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";


export const useNowPlayingMiveis = () => {
    const dispatch = useDispatch();
    console.log("Sdfa")
    const getMovies = async function () {
      try {
        const response = await fetch(MOVIES_API, OPTIONSOBJ);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data));
        console.log(data, "Sdfadfew");
      } catch (err) {
        console.log(err.message);
      }
    };
    
    useEffect(() => {
      getMovies();
    }, []);
}  

