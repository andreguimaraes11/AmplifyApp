import React from 'react';
import './Form-Login.css';

const FormGrupo = () => {
  const OnConfirmarGrupoClick = () =>{
    window.location.href = '/ListaGrupos'; 
  }   

  const OnSairClick = () =>{
    window.location.href = '/ListaGrupos'; 
  } 
  
  return (   
    <>    
      <button class="btnSair" onClick = {OnSairClick}>X</button>                 
      <form  action="/ListaGrupos" class="formLogin validate-form">     
        <div class="wrapEntradaDados validate-input" data-validate="O nome deve estar preenchido">
          <span class="btn-show-pass">
            <i class="zmdi zmdi-eye"></i>
          </span>
          <input class="entradaDados" type="Nome" name="O nome deve estar preenchido." />
          <span class="entradaDadosFoco" data-placeholder="Nome"></span>                          
        </div>  

        <div class="wrapEntradaDados validate-input" data-validate="A descrição deve estar preenchida.">
          <input class="entradaDados" type="text" name="descricao"/>
          <span class="entradaDadosFoco" data-placeholder="Descrição"></span>            
        </div>

        <div class = "divEspaco180"/>
        <div class="btnConfirmarContainer">
          <div class="divBtnConfirmar">
            <div class="btnConfirmarBackGround"></div>
            <button class="btnConfirmar" onClick = {OnConfirmarGrupoClick}>
              Salvar
            </button>
          </div>
        </div>                 
      </form>         
    </>
  )
}

export default FormGrupo;