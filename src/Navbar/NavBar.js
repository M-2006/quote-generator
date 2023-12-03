
import React from 'react';
import {Link} from 'react-router-dom';
import '../Styles/navbar.css';

function NavBar() {
    return (
        <div>
        <nav className='nav'>
            <Link className='quote' to="/quote">More Quote's</Link>
        </nav>
        </div>
    );
}

export default NavBar;
