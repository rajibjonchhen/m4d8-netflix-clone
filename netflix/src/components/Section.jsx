import React,{useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import Loading from './Loading'
import DisplayMovies from './DisplayMovies'
import './style.css'


const Section =({title, heading})=>{
    
    const[movieList,setMovieList]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    const[errorHandle,setErrorHandle]=useState(false)

    useEffect(()=>{
    fetchMovie()
    },[])
   const fetchMovie = async () => {
        try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=15c1c355&s=' + title)

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

    

        return (
            <>
                <Container className="bodySectionBG px-4" fluid>
                    <h4 className="mb-n2 mt-2">
                        {heading} Movies
                    </h4>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 px-3 row__posters">
                        {isLoading && (<Loading></Loading>)}


                        <DisplayMovies movieList={movieList} />
                    </Row>

                </Container>
            </>
        )
    
}

export default Section 