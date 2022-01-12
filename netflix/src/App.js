import React, { useState, useEffect } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import MyLayout from './components/MyLayout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

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
        <MyLayout showSearchResult={showSearchResult}>
        </MyLayout>
      <div className="App">
        <Routes>
            <Route path='/' element={<Home search={search}/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    );

  
}

export default App;
