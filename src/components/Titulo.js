import React from 'react';
import './Titulo.css';

const Titulo = (props) => {
    return (
      <span class="tituloContent p-b-26">
        {props.textTitulo}
      </span>   
    );
}

export default Titulo;