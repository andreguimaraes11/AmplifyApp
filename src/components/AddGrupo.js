import React from 'react';

import './AddGrupo.css';
import './Buttons.css';

const AddGrupo = () => {
  const OnAddClick = () =>{
    window.location.href = '/NovoGrupo'; 
  }

  return (
    <>
    <div class="divEspaco"/>
    <div class="btnConfirmarContainer">
          <div class="divBtnConfirmar">
            <div class="btnConfirmarBackGround"></div>
            <button class="btnConfirmar" onClick = {OnAddClick}>
              Criar Novo Grupo
            </button>
          </div>
        </div>         
    </>
  );
};

export default AddGrupo;