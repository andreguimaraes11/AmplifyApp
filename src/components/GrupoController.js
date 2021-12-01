import React from 'react';
import AddGrupo from './AddGrupo.js';
import Screen from './Screen';
import Titulo from './Titulo';
import FormGrupo from './Form-Grupo';
import NavBar from './NavBar';

const GrupoController = () => {
  return (
      <Screen>
        <NavBar/>
        <Titulo textTitulo ='Você ainda não possui nenhum grupo.'/>
        <AddGrupo/>
      </Screen>
  );
};

const NovoGrupo = () => {
  return (
    <Screen>
      <Titulo textTitulo ='Criar Novo Grupo'/>
      <FormGrupo/>
    </Screen>
);
}

export {NovoGrupo};
export default GrupoController;