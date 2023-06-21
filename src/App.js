// import React from "react";
// import { useEffect } from "react";
// import './App.css';
// import SearchIcon from './search.svg';


// const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=f7a9d431';
// // 'http://www.omdbapi.com?apikey=f7a9d431';

// const movie1 = {
//     "Title": "Amzing Spiderman Syndrome",
//     "Year":"2012",
//     "imdbID": "tt2586634",
//     "Type": "movie",
//     "Poster": "N/A"
// }
// const App = () => {
//     const searchMovies = async(title) =>{
//         const response = await fetch(`${API_URL}&s = ${title}`);
//         const data = await response.json();
//         console.log(data.Search);


//     }   
//     useEffect(() =>{
//         searchMovies('Spiderman');
//     }, []);
//     return(
//         <div className= "app" >
//             <h1>MovieLand</h1>
        
//         <div className="search">
//             <input 
//             placeholder="Search for movies"
//             value="Superman"
//             onChange={() => {}}
//             />
//             <img
//                 src={SearchIcon}
//                 alt="search"
//                 onClick={() => {}}
//             />
        
//         </div>
//         <div className="container">
//             <div className="movie">
//                 <div>
//                    <p>{movie1.Year}</p> 
//                 </div>
//                 <div>
//                 <img src={movie1.Poster !== "N/A" ? movie1.Poster : "https://via.placeholder.com/400"} alt={Title} />
//                 </div>
//                 <div>
//                     <span>{movie1.Type} </span>
//                     <h3>{movie1.Title} </h3>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// }


// export default App;

import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;