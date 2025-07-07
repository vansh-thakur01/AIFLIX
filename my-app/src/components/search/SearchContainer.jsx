import MovieCard from "../MovieCard";

export const SearchContainer = ({ moviesData }) => {
  const len = moviesData.length > 17 ? 9 : moviesData.length;
  return (
    <div className="bg-black/90 min-h-dvh w-dvw overflow-x-hidden">
      <div className="mt-[8%]">
        <div className="flex ml-18 mb-10">
          <p className="text-white/60 text-xl">Explore titles:</p>
          <div className="flex flex-wrap gap-y-2 w-[1000px]">
            {moviesData.slice(0, len).map((movie, index) => (
              <p key={`${movie.title}-${index}`} className=" text-white/80 border-r-2 pl-3 pr-4">
                {movie.title}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-y-18 w-[97%] h-[50%] pl-7  ">
            {moviesData.map((movie,index) => (
              <div key={`${movie.poster_path}-${index}`} className="w-35">
                <MovieCard  width="12px" posterPath={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
