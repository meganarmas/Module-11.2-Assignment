import React, { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([
        {id: 1, title: 'Legally Blonde', watched: false},
        {id: 2, title: 'The X-Files: Fight the Future', watched: true},
        {id: 3, title: 'Tangled', watched: true},
        {id: 4, title: 'The Shinning', watched: false},
    ]);

    const [movieWatched, setMovieWatched] = useState(false);

    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    }

    const toggleWatch = (id) => {
        setMovies(movies.map(movie =>
            movie.id === id ? {...movie, watched: !movie.watched} : movie
        ));
    };

    const toggleView = () => {
        setMovieWatched(!movieWatched);
    }

    const filteredMovies = movieWatched
    ? movies.filter(movie => movie.watched)
    : movies;

    return (
        <div>
            <h2>Movie List!</h2>
            <button onClick={toggleView}>
                {movieWatched ? 'Show All Movies' : 'Show Watched Movies'}
            </button>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        {movie.title}
                        <button onClick = {() => toggleWatch(movie.id)}>
                            {movie.watched ? 'Watched' : 'Unwatched'}
                        </button>
                        <button onClick= {() => removeMovie(movie.id)}>Remove Movie</button>
                        </li>
                ))}
            </ul>
        </div>
    );
};
export default MovieList;