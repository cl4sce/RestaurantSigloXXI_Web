import {Link} from 'react-router-dom';
import logoRestaurant from '../imagenes/LogoResto.png';
import '../hojas-de-estilo/navbar.css';
//import Button from '@mui/material/Button';
//import ModalPedido from './ModalPedido';

//className='aplicacion-logo'
//<Button variant="outlined"><ModalPedido/></Button>
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <img 
                        src={logoRestaurant} 
                        width = '80'
                    />
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to = '/'><h2>Menú</h2></Link>
                        </li>
                        <h3> / </h3>
                        <li className="nav-item">
                            <Link className="nav-link" to = '/DetallePedido'><h2>Detalle</h2></Link>
                        </li>
                        <h3> / </h3>
                        <li className="nav-item">
                            <Link className="nav-link " to = '/Pagar'><h2>Pagar</h2></Link>
                        </li>
                    </ul>
                    <h4> Mesa N°5 </h4>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;