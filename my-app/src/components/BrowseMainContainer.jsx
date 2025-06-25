import { useSelector } from "react-redux";
import  VideoTitle  from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const BrowseMainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies?.results);
    
    if(!movies) return

    const mainMovie = movies[0];
    const {original_title , overview, id} = mainMovie;

    return (
        <div>
            <VideoBackground movieId={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    )
}

export default BrowseMainContainer;