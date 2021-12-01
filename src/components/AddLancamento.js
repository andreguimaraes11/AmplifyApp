import React from 'react';

import './AddLancamento.css';
import './Buttons.css';

const AddLancamento = () => {
  const OnAddClick = () =>{
    window.location.href = '/NovoLancamento'; 
  }

  return (
    <>
    <div class="divEspaco"/>
    <div class="btnConfirmarContainer">
          <div class="divBtnConfirmar">
            <div class="btnConfirmarBackGround"></div>
            <button class="btnConfirmar" onClick = {OnAddClick}>
              Adicionar Lançamento
            </button>
          </div>
        </div>         
    </>
  );
};

export default AddLancamento;