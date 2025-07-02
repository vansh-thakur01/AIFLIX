import { useEffect, useMemo, useRef, useState } from "react";
import { SEARCH_SVG } from "../../utils/svg";
import { searchTmdbMovie } from "../../utils/searchTmdbMove";
import { useDispatch, useSelector } from "react-redux";
import {
  addSearchedTmdbMovies,
  removeSearchedTmdbMovies,
} from "../../utils/movieSlice";
import { debouncing } from "../../utils/debouncing";
import { SearchList } from "../lists_and_cards.js/SearchList";

export const SearchButton = () => {
  const [showInputBox, setShowImputBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchedMovies = useSelector(
    (store) => store.movies.searchedTmdbMovies
  );
  const searchBox = useRef(null);
  const dispatch = useDispatch();

  const fetchSearchedMovies = async (query) => {
    const rawData = await searchTmdbMovie(query,true);
    dispatch(addSearchedTmdbMovies(rawData));
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
    if(searchBox?.current) searchBox.current.focus()
    setShowImputBox(!showInputBox);
  };

  const handleSearchClose = () => {
    if(!inputValue) setShowImputBox(false);
  }

  const handleCrossButton = ()=>{
    setInputValue("")
    dispatch(removeSearchedTmdbMovies());
  }

  return (
    <div onMouseLeave={handleSearchClose} className={`flex justify-center items-center`}>
      <button onClick={handleShowInputBox}>{SEARCH_SVG}</button>
      <div className="flex items-center relative">
        <input
          ref={searchBox}
          value={inputValue}
          onChange={(e)=>setInputValue(e.target.value)}
          className={`border-[#E8E8E8] text-[#E8E8E8] border-2 rounded  focus:outline-0 text-xl  h-9 
            ${
              showInputBox
                ? "max-w-96 opacity-100 pointer-events-auto mx-1.5 pl-1.5"
                : " max-w-0 opacity-0 pointer-events-none"
            } 
              transition-all duration-500`}
        />
        <button
          onClick={handleCrossButton}
          className="absolute right-3 cursor-pointer"
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
                : " max-w-0 opacity-0 pointer-events-none"
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
        className={`${
          showInputBox ? "p-1" : "pl-0.5"
        } transition-all duration-500`}
      >
        <p className={`text-[17px] text-white pb-1  font-semibold`}>Search</p>
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
