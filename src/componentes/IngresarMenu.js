import React from "react";
import '../hojas-de-estilo/ingresarMenu.css';

function IngresarMenu(props){
    return(
        <form className='manu-formulario'>
            <input
                className='menu-input'
                type='text'
                placeholder='Escribe un menu'
                name= 'menu'
            />
            <button className='menu-boton'>
                Agregar menu
            </button>
        </form>
    );
} 

export default IngresarMenu;