import React, { useState, useContext } from 'react';
import { Context } from '../Context';


const AddMovie = () => {

    const [movies, setMovies] = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onNameChange = e => setName(e.target.value);
    const onPriceChange = e => setPrice(e.target.value);

    const onFormSubmit = e => {
        e.preventDefault();
        let movie = { name, price, id: movies.length + 1 };
        setMovies([movie, ...movies]);
        setName('');
        setPrice('');
    };


    return (
        <div className="">
            <form onSubmit={ onFormSubmit }>
                <input name="name" value={ name } onChange={ onNameChange } placeholder="Name"/>
                <input name="price" value={ price } onChange={ onPriceChange } placeholder="Price"/>
                <button type="submit">Add movie</button>
            </form>
        </div>
    )
};




export default AddMovie;
