import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant"
import { useRef } from "react";
import { askAI } from "../utils/openRouter";
import { searchTmdbMovie } from "../utils/searchTmdbMove";
import { addAiMoviesResult } from "../utils/gptSlice";

export const GtpSearchBar = () => {
  const searchText = useRef(null);
    const selectedLang = useSelector(store => store.config.lang);
    const dispatch = useDispatch();
    // console.log(selectedLang,"+++++++++++++++++",lang.eng)
    
    const aiSearch = async ()=>{
      if(!searchText.current?.value) return;
      const {movies} = await askAI(searchText?.current?.value);
      console.log(movies,"movies name");
      const arrayOfMoviesPromise = movies.map(name => searchTmdbMovie(name));

      const data = await Promise.all(arrayOfMoviesPromise);
      console.log(data,"movies data form tmdb");
      dispatch(addAiMoviesResult(data));
    }
  return (
    <div className="p-[8%] felx justify-center">
      <div className=" bg-black">
        <form className="w-[100%] grid grid-cols-15 gap-2" onSubmit={(e)=> e.preventDefault()}>
          <input
            ref={searchText}
            className="p-6 bg-amber-50 w-full col-span-12 m-2"
            type="text"
            placeholder={lang[selectedLang].gtpSearchPlaceholder}
          ></input>
          <button onClick={aiSearch} className="bg-red-500 col-span-3 m-2 rounded-2xl text-white text-xl ">
            {lang[selectedLang].Search}
          </button>
        </form>
      </div>
    </div>
  );
}
