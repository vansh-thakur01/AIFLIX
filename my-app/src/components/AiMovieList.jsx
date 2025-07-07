import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { askAI } from "../utils/apiRequests/openRouter";
import {activateAiMoviesBackup, addAiMoviesResult,removeAiMoviesResult} from "../utils/store/slice/gptSlice";
import { MovieListShimmer } from "./shimmerUi/MovieListShimmer";
import { searchTmdbMovie } from "../utils/apiRequests/searchTmdbMove";
import MovieCard from "./MovieCard";
import lang from "../utils/languageConstant";
import { AiHaveMovies } from "./errors_components/AiHaveMovies";
import { debouncing } from "../utils/helperFunctions/debouncing";

export const AiMovieList = () => {
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);
  const aiMovies = useSelector((store) => store?.gpt?.aiMovies);
  const [aiNoMovies, setAiNoMovies] = useState(false);
  const [showRecivedMovies, setShowRecivedMovies] = useState(false);

  const dispatch = useDispatch();

  const removeNoMovieContainerAndAddBackUpMovies = ()=>{
    setAiNoMovies(false);
    dispatch(activateAiMoviesBackup());
  }

  const [removeNoMovieContainerAndAdd,_] = useMemo(() => debouncing(removeNoMovieContainerAndAddBackUpMovies,5),[])

  const handleNoMovieFound = ()=>{
    setAiNoMovies(true);
    removeNoMovieContainerAndAdd();
  }

  const aiSearch = async (e) => {
    try{
      e.preventDefault();
      if (!searchText.current?.value) return;
      dispatch(removeAiMoviesResult());
      const { movies } = await askAI(searchText?.current?.value);
      const arrayOfMoviesPromise = movies.map((name) =>
        searchTmdbMovie(name).then((arr) => arr[0])
      );
  
      const rawData = await Promise.all(arrayOfMoviesPromise);
      let data = rawData.filter((movie) => movie);
      if(!data?.length) handleNoMovieFound();
      dispatch(addAiMoviesResult(data));
    }
    catch(err){
      handleNoMovieFound();
    }
  };

  useEffect(()=>{
    dispatch(activateAiMoviesBackup());
  },[])

  useEffect(()=>{
    
  },[aiMovies])


  return (
    <div className="ml-12 relative">
      <div className={`flex ${selectedLang === "hindi" && "tracking-widest"}`}>
        <h1 className=" text-[17px] border-l-3 pl-2 font-semibold mb-2 text-amber-50 ">
          {`${lang[selectedLang].AskFromAI}:`}
        </h1>
        <div>
          <form onSubmit={aiSearch} className="pl-2 w-80">
            <input
              ref={searchText}
              type="text"
              placeholder={lang[selectedLang].aiSearchPlaceHolder}
              className={`focuse text-gray-200 text-[17px] min-w-[127rem]  focus:border-none border-none focus:ring-0 outline-none focus:outline-none caret-white ${
                selectedLang === "hindi" && "text-[17px]"
              }`}
            ></input>
          </form>
        </div>
      </div>

      <div className="h-53 relative">
        <div className={`absolute -top-1 ${(!aiMovies) ? "opacity-100" : "opacity-0"} transition-all duration-200`}> <MovieListShimmer /> </div>
        <div className={`absolute w-[100%] ${(aiNoMovies && !aiMovies) ? "opacity-100" : "opacity-0"} transition-all duration-300`}> <AiHaveMovies/></div>
          <div className={`flex overflow-y-hidden no-scrollbar mb-12 ${(aiMovies) ? "opacity-100" : "opacity-0"} transition-all duration-400`}>
            <div className="flex cursor-pointer">
              {aiMovies?.map((movie,i) => (
                <MovieCard  key={movie.id + i} title={movie.title} posterPath={movie.poster_path} />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};
