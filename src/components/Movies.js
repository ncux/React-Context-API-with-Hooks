import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import Movie from "./Movie";


const Movies = () => {

  const [movies, setMovies] = useContext(Context);

  return (
      <div className="">
          <h1>Movies!</h1>
          <ul>
              { movies.map(movie => (
                 <Movie key={ movie.id } name={ movie.name } price={ movie.price } />
              )) }
          </ul>


      </div>
  )
};




export default Movies;
