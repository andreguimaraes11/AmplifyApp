import React from 'react';
import AddLancamento from './AddLancamento.js';
import Screen from './Screen';
import Titulo from './Titulo';
import FormLancamento from './Form-Lancamento.js';
import Navbar from './NavBar.js';

const LancamentoController = () => {
  return (
      <Screen>
        <Navbar/>
        <Titulo textTitulo ='O grupo ainda não possui nenhum lançamento.'/>
        <AddLancamento/>
      </Screen>
  );
};

const NovoLancamento = () => {
  return (
    <Screen>
      <Titulo textTitulo ='Adicionar Novo Lançamento'/>
      <FormLancamento/>
    </Screen>
);
}

export {NovoLancamento};
export default LancamentoController;