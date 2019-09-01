import React, { useState, createContext } from 'react';

export const Context = createContext();

export const Provider = props => {

    const [movies, setMovies] = useState([
        { name: 'Movie one', price: '$10', id: 100 },
        { name: 'Movie two', price: '$10', id: 200 },
        { name: 'Movie three', price: '$10', id: 300 }
    ]);


    return (
        <Context.Provider value={ [movies, setMovies] }>
           { props.children }
        </Context.Provider>
    )
};




