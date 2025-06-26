import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

function VideoBackground({movieId}) {
    useMovieTrailer(movieId);
    const videoTrailer = useSelector(store=> store.movies?.movieTrailer)

    if(!videoTrailer) return

    return (
      <div className="relative w-full bg-amber-800 h-screen overflow-hidden">
        <iframe
          width="560"
          height="315"
          className="absolute w-full h-full top-0 left-0 scale-[1.4]"
          src={`https://www.youtube.com/embed/${videoTrailer?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoTrailer?.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default VideoBackground