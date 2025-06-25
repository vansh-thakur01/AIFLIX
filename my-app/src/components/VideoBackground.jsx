import { useEffect } from "react";
import { OPTIONSOBJ } from "../utils/config"

function VideoBackground({movieId}) {
    const getMovieVideo = async function(movieId){
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,OPTIONSOBJ);
        const data = await response.json();
        console.log(data)
        const trailer = data.results.filter((obj) => obj.type === "Trailer");
        console.log(trailer);
    }

    useEffect(()=>{
        getMovieVideo(movieId);
    },[])

    return (
        <div></div>
    )
}

export default VideoBackground