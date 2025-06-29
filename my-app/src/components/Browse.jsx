import Header from "./Header";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";
import { usePopularMovies } from "../hooks/usePopulerMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import { useEffect, useRef, useState } from "react";
import { GtpSearch } from "./GtpSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const mainContainer = useRef(null);
    const [scrolledHalf, setScrolledHalf] = useState(false);
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)

    useEffect(()=>{
      const handleScroll = ()=>{
        const container = mainContainer?.current;

        if(!container) return;

        const rec = container.getBoundingClientRect()
        if(rec.top < -15) setScrolledHalf(true)
        else setScrolledHalf(false);        
      }

      window.addEventListener("scroll",handleScroll);

      return ()=>window.removeEventListener("scroll",handleScroll);
    },[])
   
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
      <div className="">
        <div className="relavite">
          <div className={`p-3 pt-2 px-11 fixed flex top-0 left-0 right-0 bottom-0 transition-all duration-500 justify-center z-15 ${scrolledHalf ? "bg-black/90 h-26" :" h-27 bg-gradient-to-b from-black to-transparent to-[95%]"}`}>
            <Header loggedIn={true} />
          </div>
            {showGptSearch ? <GtpSearch/> : 
            <div>
              <div ref={mainContainer}>
                <BrowseMainContainer />
              </div>
                <BrowseSecondaryContainer/> 
            </div>}
        </div>
      </div>
    );
}

export default Browse;