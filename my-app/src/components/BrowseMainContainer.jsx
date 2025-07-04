import { useSelector } from "react-redux";
import  VideoTitle  from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { randomNumber } from "../utils/helperFunctions/randonNumber";
import { BrowseMainContainerShimmer } from "./shimmerUi/BrowseMainContainerShimmer";
import Skeleton from "react-loading-skeleton";
import { useMemo } from "react";

const BrowseMainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results);
    const randomMovie =  useMemo(()=>randomNumber(19),[])
    
    if(!movies?.length) return  <BrowseMainContainerShimmer/>


    const mainMovie = movies[randomMovie];
    
    const {original_title , overview, id} = mainMovie;

    return (
      <div className="h-dvh overflow-hidden bg-[#171717]">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    );
}

export default BrowseMainContainer;