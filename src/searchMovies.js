import React, { useState } from "react"
import MovieCard from "./movieCard.js"

function SearchMovies() {

    //array of two things, state of what we want to track and function that will update that state
    const [query, setQuery] = useState('');

    const [movies, setMovies] = useState([]);


    const searchMovies = async (e) => { 
        e.preventDefault();
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=393758a2fb0fabfe9350e09bb1d1437e&language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json();
            setMovies(data.results);
        } catch(err) {
        }
    }

        return (
            <>
                <form className="form" onSubmit={searchMovies}>
                    <label
                        className="label1"
                        //htmlFor this label is for specific element (input)
                        htmlFor="query"
                    >Movie Name</label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        name="query"
                        placeholder="i.e. King Kong"
                        value={query}
                        //onChange e.target.value targets the event value
                        onChange={(e) => setQuery(e.target.value)}
                    ></input>
                    <br />
                    <button className="button" type="submit">Search</button>
                </form>
                <div className="card-list">{movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </>
        );
}


export default SearchMovies
