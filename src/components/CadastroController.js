import React from 'react';
import Screen from './Screen';
import FormCadastro from './Form-Cadastro.js';
import Titulo from './Titulo';

const CadastroController = () => {
    return (
      <Screen>
        <Titulo textTitulo ='Cadastre-se'/>        
        <FormCadastro/>
      </Screen>    
    );
}

export default CadastroController;