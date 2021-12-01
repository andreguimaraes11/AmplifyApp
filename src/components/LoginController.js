import React from 'react';
import Screen from './Screen';
import Titulo from './Titulo';
import FormLogin from './Form-Login.js'

const LoginController = () => {
    return (
      <Screen>
        <Titulo textTitulo='LOGIN' />      
        <FormLogin />
      </Screen>
    );
}

export default LoginController;