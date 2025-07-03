import { TMDB_IMAGE_CDN } from "../utils/constants";

const MovieCard = ({ title, posterPath, width }) => {
  // console.log(posterPath,"{{{{{{{{{{{{{{{")
  return (
    <div className={`${width ? width : "w-50"}  mr-2 relative`}>
      {/* <div className="absolute bottom-0 w-[100%] text-center">
            <div className="text-center flex justify-center w-[100%]">
              <p className="relative text-gray-200 font-semibold h-9 w-[60%] pl-2 text-2xl z-10">{title}</p>
            </div>
          <div className="bg-gradient-to-b from-transparent absolute bottom-0 to-black w-[100%] h-9 to-[60%]"></div>
          </div> */}
      <img src={TMDB_IMAGE_CDN + posterPath} />
      <div></div>
    </div>
  );
};

export default MovieCard;
