import React from 'react'
import "../assets/Moviecards.css";
import { useMoviecontext } from '../context/moviecontext';

function Moviecards({movie}) {

    const{addtofavourites,removefromfavourites,isfavourite}=useMoviecontext()


    function Clckfunc(e) {
        e.preventDefault()
        if(isfavourite(movie.imdbID)) removefromfavourites(movie.imdbID)
        else addtofavourites(movie)
        
    }


  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
            <button className={`favourite-btn ${isfavourite(movie.imdbID)?"active":""}`} onClick={Clckfunc}>
                ❤️
            </button>
        </div>
      
    <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
    </div>
    </div>
  )
}

export default Moviecards
