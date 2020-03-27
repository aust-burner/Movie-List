import React, { useContext } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import MovieDetails from './MovieDetails';

const MovieList = () => {
    const { movies } = useContext(MovieContext)
    return movies.length ? (
        <div className="movie-list">
            <ul>
                {movies.map(movie => {
                    return (
                        <MovieDetails movie={movie} key={movie.id}></MovieDetails>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">
            No movies to watch... Add some movies or go outside?
        </div>
    )
       
}

export default MovieList

