import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'

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
      <home/>
      <TvShows /> 
      {search? ( <Section heading="Search Results" title={search} />) : (<>
                <Section heading="Harry Potter" title="Harry Potter"/>
                <Section heading="Marvel" title="Marvel"/>
                <Section heading="Lord of the Rings" title="Lord of the Rings"/>
                <Section heading="Horror" title="Horror"/>
              </>)}
      <MyFooter />
      </div>
    );

  
}

export default App;
