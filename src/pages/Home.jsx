import React from 'react';
import './Home.css'
import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div className='home'>
            <h1>Filmes Populares</h1>
            <MovieList />
        </div>
    );
};

export default Home;