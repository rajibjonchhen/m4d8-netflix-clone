import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Card,} from 'react-bootstrap'
import Loading from './Loading'

const MovieDetail = () => {

    const params = useParams()
    const [movie,setMovie]=useState()
    const[isLoading,setIsLoading]=useState(false)
    const[errorHandle,setErrorHandle]=useState(false)

    useEffect(()=>{
        const movieId = params.MovieId
       
        fetchMovie(movieId)
    },[])

    const fetchMovie =async(movieId)=> {
        console.log(movieId)
        try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=15c1c355&i=' + movieId)
            let data = await movieRes.json()

            if (movieRes.ok) {
               setMovie(data)
                setIsLoading(false)
                console.log(movie)
            } else {
              
                setIsLoading(false)
                setErrorHandle(true)
               
            }
        } catch (err) {
            console.log(err)
        }
    }
    return(<div>
        {isLoading && <Loading/>}
        <h1>Movie Details</h1>
        <Card className='px-1 py-4 mb-4 m-0 border-0 w-100 bg-transparent' style={{maxWidth:"18rem"}}>
                <Card.Img className="img-poster align-self-center" variant="top" src='/' />
                <div className="position-relative">
                    <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between w-100 position-absolute">
                        {/* <Card.Title className="mb-2 px-2"> <h6>{movie.Title}</h6> <h6>{movie.imdbID}</h6></Card.Title> */}
                    </Card.Body>
                </div>
            </Card>
    </div>
    )


}

export default MovieDetail