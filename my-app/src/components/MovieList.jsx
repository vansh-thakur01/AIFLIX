import MovieCard from "./MovieCard"

const MovieList = ({title, movies}) => {
  
    console.log(movies, "++++++++++++");
    let { backdrop_path } = movies[2];
    console.log(backdrop_path, "-----------------");
  
    return (
      <div className="ml-15">
        <h1 className=" text-3xl font-semibold mb-3 text-amber-50">{title}</h1>
        <div className="flex overflow-y-hidden no-scrollbar mb-15">
          <div className="flex">
            {movies.map((movie) => (
              <MovieCard posterPath={movie.backdrop_path} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MovieList