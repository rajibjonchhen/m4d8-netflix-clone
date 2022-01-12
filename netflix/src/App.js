import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import MyLayout from './components/MyLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieDetail from './components/MovieDetail';
import TvShowPage from './components/TvShowPage';
import MoviesPage from './components/MoviesPage'
import RecentlyAddedPage from './components/RecentlyAddedPage';
import MyList from './components/MyList';
import ErrorPage from './components/ErrorPage'
const App =()=> {

  const [search, setSearch] = useState('')
  const [searchResult, setSearchResult] = useState([])


  const showSearchResult = async (searchQuery) => {
    this.setState({ search: searchQuery })
    try {
        let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + searchQuery, {
            method: "GET"
        })
        let data = await response.json()
        setSearchResult({data})
        setSearch({searchQuery})
        console.log(data)
      

    } catch (error) {
      console.log(error)
    }
  }

  
    return (
      <BrowserRouter>
      <div className="App">
        
        <Routes>
        <Route path='/' element={<MyLayout showSearchResult={showSearchResult}>
            <Home search={search}/>
        </MyLayout>}/>
       
          <Route path='/TvShow' element={<MyLayout>
            <TvShowPage/>
          </MyLayout>}/>

          <Route path='/MovieDetail/:MovieId' element={<MyLayout>
            <MovieDetail/>
          </MyLayout>}/>
        
         
        <Route path='/Movies' element={<MyLayout>
            <MoviesPage/>
          </MyLayout>}/>

          <Route path='/Recent' element={<MyLayout>
            <RecentlyAddedPage/>
          </MyLayout>}/>

          <Route path='/MyList' element={<MyLayout>
            <MyList/>
          </MyLayout>}/>

          <Route path='/*' element={<ErrorPage/>}/>
        </Routes>   
      </div>
      </BrowserRouter>
    );

  
}

export default App;
