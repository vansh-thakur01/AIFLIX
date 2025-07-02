import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { askAI } from "../utils/openRouter";
import { addAiMoviesResult,removeAiMoviesResult } from "../utils/gptSlice";
import { MovieListShimmer } from "./shimmerUi/MovieListShimmer";
import { searchTmdbMovie } from "../utils/searchTmdbMove";
import MovieCard from "./MovieCard";
import lang from "../utils/languageConstant";


export const AiMovieList = () => {
  const searchText = useRef(null);
  const selectedLang = useSelector((store) => store.config.lang);
  const aiMovies = useSelector((store) => store.gpt.aiMovies);
  const dispatch = useDispatch();

  const aiSearch = async (e) => {
    e.preventDefault()
    if (!searchText.current?.value) return;
    dispatch(removeAiMoviesResult());
    const { movies } = await askAI(searchText?.current?.value);
    console.log(movies, "movies name");
    const arrayOfMoviesPromise = movies.map((name) => searchTmdbMovie(name).then(arr=>arr[0]));

    const rawData = await Promise.all(arrayOfMoviesPromise);
    const data = rawData.filter((movie) => movie);
    console.log(data, "movies data form tmdb");
    dispatch(addAiMoviesResult(data));
  };

//   if(!aiMovies) return (<MovieListShimmer/>)
  

  return (
    <div className="ml-15 ">
      <div className={`flex ${selectedLang === "hindi" && "tracking-widest"}`}>
        <h1 className=" text-[26px] border-l-3 pl-2 font-semibold mb-2 text-amber-50 ">
          {`${lang[selectedLang].AskFromAI}:`}
        </h1>
        <div>
          <form onSubmit={aiSearch} className="pl-2 w-80">
            <input
              ref={searchText}
              type="text"
              placeholder={lang[selectedLang].aiSearchPlaceHolder}
              className={`focuse text-gray-200 text-[26px] min-w-[127rem]  focus:border-none border-none focus:ring-0 outline-none focus:outline-none caret-white ${
                selectedLang === "hindi" && "text-[27px]"
              }`}
            ></input>
          </form>
        </div>
      </div>

      {!aiMovies && <MovieListShimmer />}

      {aiMovies && (
        <div className="flex overflow-y-hidden no-scrollbar mb-15">
          <div className="flex">
            {aiMovies.map((movie) => (
                <MovieCard title={movie.title} posterPath={movie.poster_path} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

