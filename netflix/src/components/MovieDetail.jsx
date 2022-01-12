import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {

    const params = useParams()
    const[movieList,setMovieList]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[errorHandle,setErrorHandle]=useState(false)

    useEffect(()=>{
        const movieId = params.imdbID
       
        fetchMovie(movieId)
    },[])

    const fetchMovie =async(movieId)=> {
        try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=15c1c355&s=' + movieId)

            if (movieRes.ok) {
                let movies = await movieRes.json()
                let sortedMovies = movies.Search.sort(function (a, b) {
                    return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
                }).reverse();
                    setMovieList([...sortedMovies])
                   setIsLoading(false)

            } else {
                setMovieList([])
                setIsLoading(false)
                setErrorHandle(true)
               
            }
        } catch (err) {
        }
    }
    return(
        <h1>Movie Details</h1>
    )


}

export default MovieDetail