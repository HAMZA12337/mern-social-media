//components/widgets/header/Header.js

import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <nav className="navbar navbar-dark bg-danger mb-4">
            <Link className="navbar-brand" to="/"> AZUL Music </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"><i className="fas fa-home"></i> Accueil <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites"><i className="fas fa-star"></i> Favoris</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;