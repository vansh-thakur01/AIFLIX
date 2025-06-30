import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  
    // console.log(movies, "++++++++++++");
    // let {backdrop_path } = movies[3];
    // console.log( backdrop_path, "-----------------");
  
    return (
      <div className="ml-15">
        <h1 className=" text-[26px] border-l-3 pl-2 font-semibold mb-2 text-amber-50 ">{title}</h1>
        <div className="flex overflow-y-hidden no-scrollbar mb-15">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard title={movie.title} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MovieList