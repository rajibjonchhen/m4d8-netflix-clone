import React from 'react'
import CardSearch from './CardSearch'

const DisplayMovies = ({movieList})=> {
   
        return (
        <>
            {
            movieList.map(movie => <CardSearch key={movie.imdbID} movie={movie}></CardSearch>)}
        </>);
    
}

export default DisplayMovies;