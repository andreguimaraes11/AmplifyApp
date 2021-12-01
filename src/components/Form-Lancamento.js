import React from 'react';
import './Form-Login.css';

const FormLancamento = () => {
  const OnConfirmarLancamentoClick = () =>{
    window.location.href = '/ListaLancamentos'; 
  }   

  const OnSairClick = () =>{
    window.location.href = '/ListaLancamentos'; 
  } 
  
  return (   
    <>
      <button class="btnSair" onClick = {OnSairClick}>X</button>                 
      <form  action="/ListaLancamentos" class="formLogin validate-form">     
        <div class="wrapEntradaDados validate-input" data-validate="O nome deve estar preenchido">
          <span class="btn-show-pass">
            <i class="zmdi zmdi-eye"></i>
          </span>
          <input class="entradaDados" type="Nome" name="Nome" />
          <span class="entradaDadosFoco" data-placeholder="Nome"></span>                          
        </div>  

        <div class="wrapEntradaDados validate-input" data-validate="A descrição deve estar preenchida.">
          <input class="entradaDados" type="text" name="descricao"/>
          <span class="entradaDadosFoco" data-placeholder="Descrição"></span>            
        </div>

        <div class="wrapEntradaDados validate-input" data-validate="O Valor deve ser maior que zero.">
          <input class="entradaDados" type="text" name="valor"/>
          <span class="entradaDadosFoco" data-placeholder="R$"></span>            
        </div>        

        <div class = "divEspaco120"/>
        <div class="btnConfirmarContainer">
          <div class="divBtnConfirmar">
            <div class="btnConfirmarBackGround"></div>
            <button class="btnConfirmar" onClick = {OnConfirmarLancamentoClick}>
              Salvar
            </button>
          </div>
        </div>                 
      </form>         
    </>
  )
}

export default FormLancamento;