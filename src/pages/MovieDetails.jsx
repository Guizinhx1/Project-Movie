
import './MovieDetails.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../config/data';

const MovieDetails = () => {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   
    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar detalhes do filme');
                }
                const data = await response.json();
                setMovie(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id, API_KEY]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="movie-details">
            {movie && (
                <>
                    <h1>{movie.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <p><strong>Data de Lançamento:</strong> {movie.release_date}</p>
                    <p><strong>Resumo:</strong> {movie.overview}</p>
                    <p><strong>Nota:</strong> {movie.vote_average}</p>
                </>
            )}
        </div>
    );
};

export default MovieDetails;