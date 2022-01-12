import React from 'react'
import CardSearch from './CardSearch'
import { Link } from 'react-router-dom';

const DisplayMovies = ({movieList})=> {
   
        return (
        <>
            {
            movieList.map(movie => <Link to={'/MovieDetail/' + movie.imdbID}><CardSearch key={movie.imdbID} movie={movie}></CardSearch></Link>)}
        </>);
    
}

export default DisplayMovies;