//components/widgets/footer/Footer.js

import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () =>{
    return(
        <nav className="navbar navbar-dark bg-danger mb-4">
            <Link className="navbar-brand mx-auto" to="#">AZUL&copy;2021</Link>
        </nav>
    )
}

export default Footer;