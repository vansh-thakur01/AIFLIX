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

  useEffect(() => {
    if (inputValue.trim()) fetchQueryMovies(inputValue);
    else {
      removeMovieRequest();
      dispatch(removeSearchedTmdbMovies());
    }
  }, [inputValue]);

  const handleShowInputBox = () => {
    if (showInputBox === false) setInputValue("");
    if (searchBox?.current) {
      searchBox.current.focus();
    }
    setShowImputBox(!showInputBox);
  };

  const handleSearchClose = () => {
    if (!inputValue) {
      setShowImputBox(false);
      setI;
    }
  };

  const handleCrossButton = () => {
    setInputValue("");
    dispatch(removeSearchedTmdbMovies());
  };

  return (
    <div
      onMouseLeave={handleSearchClose}
      className={`flex justify-center items-center relative`}
    >
      <button onClick={handleShowInputBox}>{SEARCH_SVG}</button>
      <div className="flex items-center relative">
        <input
          ref={searchBox}
          value={inputValue}
          placeholder="do something usefull"
          onChange={(e) => setInputValue(e.target.value)}
          className={`outline-[#E8E8E8]/90 text-[#E8E8E8] outline-3 focus:outline-3 rounded  text-xl  h-9 
            ${
              showInputBox
                ? "max-w-96 opacity-100 pointer-events-auto mx-1.5 pl-1.5"
                : " max-w-0 opacity-0 pointer-events-none -z-10"
            } 
              transition-all duration-500`}
        />
        <button
          onClick={handleCrossButton}
          className="absolute right-1 top-1 cursor-pointer transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        className={`absolute -bottom-12 left-12.5 ${
          showInputBox && noResult
            ? "opacity-100 animate-giggle-once"
            : "opacity-0 -z-10"
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
          className={`text-[17px] text-white pb-1  font-semibold`}
        >
          {lang[selectedLang].Search}
        </button>
      </div>

      {/* <div
        className={`absolute top-20 ${
          searchedMovies?.length
            ? "max-h-56 opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <SearchList moviesData={searchedMovies} />
      </div> */}
    </div>
  );
};
