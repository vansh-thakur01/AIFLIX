import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ title, posterPath, width }) => {
  return (
    <div className={`${width ? width : "w-50"}  mr-2 relative`}>
      <img src={TMDB_IMAGE_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
