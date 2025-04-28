import './MovieList.css'
import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import Loading from './Loading';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = 'd71acc146d4771a69a65c8aad9551af5'; 

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=pt-BR`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar filmes');
                }
                const data = await response.json();
                setMovies(data.results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [API_KEY]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;