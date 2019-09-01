import React, { useContext } from 'react';
import { Context } from '../Context';
import styles from './Navbar.module.css';

const Navbar = () => {

    const [movies] = useContext(Context);

    return (
        <div className={ styles.nav }>
            <h2>Patrick</h2>
            <p>Movies: { movies.length }</p>
        </div>
    )
};




export default Navbar;

