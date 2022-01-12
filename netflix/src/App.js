import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'
import Home from './components/Home';
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
      <div className="App">
        
      <NavBar showSearchResult ={showSearchResult}/>
      <Home search={search}/>
   
      <MyFooter />
      </div>
    );

  
}

export default App;
