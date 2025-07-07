import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ title, posterPath, width }) => {
  return (
    <div className={`${width ? width : "w-30"}  mr-1 relative`}>
      <img src={TMDB_IMAGE_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
