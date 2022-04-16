import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



 const App = () => {


    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

       setMovies(data.Search);
    }

    useEffect(()=>{
        searchMovies('Spiderman')
    },[]);

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f9a5299a";

// const movie1 = {
//     "Title": "Italian Spiderman",
//     "Year": "2007",
//     "imdbID": "tt2705436",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

     return(
        <div className="app">

    <Router><Navbar /></Router>


            <h1>Movie Land</h1>

            <div className="search">
                <input type="text"
                    placeholder="Search Movies.."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                
                <img src={SearchIcon} alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

                {
                    movies?.length > 0
                    ? (
                        <div className="container">

                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>

                            ))}

                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies Found</h2>
                        </div>
                    )
                }
           
        </div>
     );
 }

 export default App;