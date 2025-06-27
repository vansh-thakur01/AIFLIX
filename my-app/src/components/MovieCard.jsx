import { TMDB_IMAGE_CDN } from "../utils/config"

const MovieCard = ({posterPath}) => {
    console.log(posterPath,"{{{{{{{{{{{{{{{")
  return (
    <div className="w-85 h-45 mr-2">
        <img src={TMDB_IMAGE_CDN + posterPath}/>
    </div>
  )
}

export default MovieCard