import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {Card,} from 'react-bootstrap'
import Loading from './Loading'

const MovieDetail = () => {

    const params = useParams()
    const [movie,setMovie]=useState({})
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
            if (movieRes.ok) {
                  let data = await movieRes.json()
               setMovie(data)
                setIsLoading(false)
                console.log(data)
            } else {
              
                setIsLoading(false)
                setErrorHandle(true)
               
            }
        } catch (err) {
            console.log(err)
        }
    }
    return(<div>
    
       
        {movie? (<div className="d-flex justify-content-center">
                    <div>
                    <Card className='px-1 py-4 mr-4 m-0 border-0 w-100 bg-transparent' style={{maxWidth:"18rem"}}>
                        <Card.Img className="img-poster align-self-center" variant="top" src={movie.Poster} />
                    </Card> 
                    </div>
                        <div className="text-left pt-2 pl-5 w-100 ">
                                 <p className='w-100'>Year : <span>{movie.Year}</span> </p>
                                 <p>Title : <span>{movie.Title}</span> </p>
                                 <p>Released on : <span>{movie.Released}</span> </p>
                                 <p>Genre : <span>{movie.Genre}</span> </p>
                                 <p>Actors : <span>{movie.Actor}</span> </p>
                                 <p>Directors : <span>{movie.Director}</span> </p>
                                 <p>IMDB Rating: <span>{movie.imdbRating}</span> </p>
                                <p className='w-50'>Plot:  <br/> <span >{movie.Plot}</span> </p>
                        </div>
               
            </div>):(<Loading/>)}
    </div>
    )
    // {
    //     "Title": "Guardians of the Galaxy Vol. 2",
    //     "Year": "2017",
    //     "Rated": "PG-13",
    //     "Released": "05 May 2017",
    //     "Runtime": "136 min",
    //     "Genre": "Action, Adventure, Comedy",
    //     "Director": "James Gunn",
    //     "Writer": "James Gunn, Dan Abnett, Andy Lanning",
    //     "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
    //     "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    //     "Language": "English",
    //     "Country": "United States",
    //     "Awards": "Nominated for 1 Oscar. 15 wins & 58 nominations total",
    //     "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    //     "Ratings": [
    //     {
    //     "Source": "Internet Movie Database",
    //     "Value": "7.6/10"
    //     },
    //     {
    //     "Source": "Rotten Tomatoes",
    //     "Value": "85%"
    //     },
    //     {
    //     "Source": "Metacritic",
    //     "Value": "67/100"
    //     }
    //     ],
    //     "Metascore": "67",
    //     "imdbRating": "7.6",
    //     "imdbVotes": "622,462",
    //     "imdbID": "tt3896198",
    //     "Type": "movie",
    //     "DVD": "22 Aug 2017",
    //     "BoxOffice": "$389,813,101",
    //     "Production": "N/A",
    //     "Website": "N/A",
    //     "Response": "True"
    //     }
}

export default MovieDetail