import React from "react";
import {useState, useEffect} from "react";

import "./MovieApp.css";
import HomeButton from "../../components/HomeButton.js";
import MovieCard from "./MovieCard.js";

function MovieApp() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=1`

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query="`

    //GET initial movies on page load
    // do NOT give movies as dependency array - will call on loop!
    useEffect(() => {
        getMovies(API_URL);
    }, [])
    
    async function getMovies(url) {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data.results);
        setMovies(data.results);
        //console.log("this is results: ", movies)
    }

    //passed to Movie Card to set the class for CSS
    function getClassByRate(vote) {
        if(vote >= 8) {
            return "ma-green"
        } else if (vote >= 5) {
            return "ma-orange"
        } else {
            return "ma-red"
        }
    }

    //Search functionality

    //this passed to form
    function handleSubmit(e) {
        //stops it submitting to the page
        e.preventDefault(); 

        if(search && search !== "") {
            getMovies(SEARCH_API + search)

            setSearch("");
            //this clears the input after user enters
            e.target.reset();
        }
    }

    //this passed to input to set state for search that is added to API request
    function handleChange(e) {
        e.preventDefault();
        setSearch(e.target.value)
    }

    return (
        <div className="ma-container">
            <header className="ma-header">
                <form className="ma-form" id="form" onSubmit={handleSubmit}>
                    <input type="text" id="search" className="ma-search" placeholder="Search" onChange={handleChange} />
                </form>
            </header>

            <main className="ma-main" id="main">
                {/*map through movies and return MovieCards*/} 
                {
                    movies?.map((item, index) => 
                        <MovieCard 
                            key={index} 
                            imgPath={IMG_PATH} 
                            posterPath={item.poster_path} 
                            title={item.title} 
                            getClassByRate={getClassByRate} 
                            voteAverage={item.vote_average} 
                            overview={item.overview} />
                    )
                }
            </main>

            <HomeButton />
        </div>
    )
}

export default MovieApp;