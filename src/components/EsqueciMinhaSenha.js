import React from 'react';
import './Container.css';
import './imagem.css';
import Screen from './Screen';
import Titulo from './Titulo';


const EsqueciMinhaSenha = (props) => {
    return (
      <Screen>
        <Titulo textTitulo="Parece que não há nada por aqui..."/>
        <div class= "imgContainer">
          
        </div>
      </Screen>
    );
}

export default EsqueciMinhaSenha;