import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ movies }) {
  return (
    <>
      <div className="movie-list">
        {movies.map((movie,index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}
