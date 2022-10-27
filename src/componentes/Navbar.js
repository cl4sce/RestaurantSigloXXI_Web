import React, {useState} from "react";
import {Link} from 'react-router-dom';
import logoRestaurant from '../imagenes/logo-restaurante3.png';
import '../hojas-de-estilo/navbar.css'

//className='aplicacion-logo'
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/'>
                    <img 
                        src={logoRestaurant} 
                        width = '90'
                    />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to = '/'>Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to = '/DetallePedido'>Detalle</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to = '/Pagar'>Pagar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;