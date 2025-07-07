import { useEffect, useMemo, useRef, useState } from "react";
import { SEARCH_SVG } from "../../utils/svg";
import { searchTmdbMovie } from "../../utils/apiRequests/searchTmdbMove";
import { useDispatch, useSelector } from "react-redux";
import {addSearchedTmdbMovies,removeSearchedTmdbMovies} from "../../utils/store/slice/movieSlice";
import { debouncing } from "../../utils/helperFunctions/debouncing";
import { SearchError } from "../errors_components/SearchError";
import lang from "../../utils/languageConstant";

export const SearchButton = () => {
  const [showInputBox, setShowImputBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [noResult, setNoResult] = useState(false);
  const searchedMovies = useSelector(
    (store) => store.movies.searchedTmdbMovies
  );
  const selectedLang = useSelector((store) => store.config.lang);
  const searchBox = useRef(null);
  const dispatch = useDispatch();

  const removeSearchErrorComponent = () => {
    setNoResult(false);
  };

  const [delayRemove, removeTimer] = useMemo(
    () => debouncing(removeSearchErrorComponent, 1.2),
    []
  );

  const handleNoResult = () => {
    setNoResult(true);
    delayRemove();
  };

  const fetchSearchedMovies = async (query) => {
    const rawData = await searchTmdbMovie(query, true);
    rawData.length
      ? dispatch(addSearchedTmdbMovies(rawData))
      : handleNoResult();
  };

  const [fetchQueryMovies, removeMovieRequest] = useMemo(
    () => debouncing(fetchSearchedMovies, 1),
    []
  );

  const querySearchRequest = ()=>{
    if (inputValue.trim()) fetchQueryMovies(inputValue);
    else {
      removeMovieRequest();
      dispatch(removeSearchedTmdbMovies());
    }
  }

  useEffect(() => {
    querySearchRequest();
  }, [inputValue]);

  const handleShowInputBox = () => {
     setInputValue("");
    if (searchBox?.current) {
      searchBox.current.focus();
    }
    setShowImputBox(!showInputBox);
  };

  const handleSearchClose = () => {
    if (!inputValue) {
      setShowImputBox(false);
    }
  };

  const handleCrossButton = () => {
    setInputValue("");
    dispatch(removeSearchedTmdbMovies());
  };

  const handleFormSubmint = (e)=>{
    e.preventDefault();
    querySearchRequest()
  }

  return (
    <div
      onMouseLeave={handleSearchClose}
      className={`flex justify-center items-center relative`}
    >
      <button id="search" className="cursor-pointer " onClick={handleShowInputBox}>{SEARCH_SVG}</button>
      <div className="flex items-center relative">
        <form onSubmit={(e)=>handleFormSubmint(e)}>
          <input
            id="searchInput"
            ref={searchBox}
            value={inputValue}
            placeholder="do something usefull"
            onChange={(e) => setInputValue(e.target.value)}
            className={`outline-[#E8E8E8]/90 text-[#E8E8E8] outline-2 focus:outline-2 rounded   h-6 
            ${
              showInputBox
                ? "max-w-96 opacity-100 pointer-events-auto mx-1.5 pl-1.5"
                : " max-w-0 opacity-0 pointer-events-none -z-10"
            } 
              transition-all duration-500`}
          />
        </form>
        <button
          onClick={handleCrossButton}
          className="absolute right-1 top-1 cursor-pointer transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="white"
            viewBox="0 0 24 24"
            className={`${
              showInputBox
                ? "max-w-96 opacity-100 pointer-events-auto mx-1.5"
                : " max-w-0 opacity-0 pointer-events-none -z-10"
            }`}
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute -bottom-8 left-11 ${
          showInputBox && noResult
            ? "opacity-100 pointer-events-none animate-giggle-once"
            : "opacity-0 pointer-events-none -z-10"
        } transition-all duration-500`}
      >
        <SearchError />
      </div>
      <div
        className={`${
          showInputBox ? "p-1" : "pl-0.5"
        } transition-all duration-500`}
      >
        <button
          onClick={handleShowInputBox}
          className={`text-[13.5px] text-white/95 pb-1 cursor-pointer font-semibold`}
        >
          {lang[selectedLang].Search}
        </button>
      </div>
    </div>
  );
};
