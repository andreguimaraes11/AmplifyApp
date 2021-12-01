import React from 'react';
import './Form-Login.css';
import './Buttons.css';

function FormCadastro(props) {
  const OnSairCadastro = () => {
    window.location.href = '/';
  }

const OnCadastrarClick = () =>{
  window.location.href = '/'; 
}   

const OnSairClick = () =>{
  window.location.href = '/Login'; 
} 

 /**   function validateName(value) {
      let error
      if (!value) {
        error = 'Name is required'
      } else if (value.toLowerCase() !== 'naruto') {
        error = "Jeez! You're not a fan 😱"
      }
      return error
    }**/
  
    return (   
      <>
        <button class="btnSair" onClick = {OnSairClick}>X</button>                 
        <form  action="/ListaGrupos" class="formLogin validate-form">     
          <div class="wrapEntradaDados validate-input" data-validate="O nome deve estar preenchido">
            <span class="btn-show-pass">
              <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="entradaDados" type="Nome" name="Nome" />
            <span class="entradaDadosFoco" data-placeholder="Nome"></span>                          
          </div>  

          <div class="wrapEntradaDados validate-input" data-validate="Email válido: a@b.c">
            <input class="entradaDados" type="text" name="email"/>
            <span class="entradaDadosFoco" data-placeholder="E-mail"></span>            
          </div>
          
          <div class="wrapEntradaDados validate-input" data-validate="Digite a senha">
            <span class="btn-show-pass">
              <i class="zmdi zmdi-eye"></i>
            </span>
            <input class="entradaDados" type="password" name="pass" />
            <span class="entradaDadosFoco" data-placeholder="Senha"></span>                          
          </div>      

          <div class="divEspaco120"/>
          <div class="btnConfirmarContainer">
            <div class="divBtnConfirmar">
              <div class="btnConfirmarBackGround"></div>
              <button class="btnConfirmar" onClick = {OnCadastrarClick}>
                Cadastre-se
              </button>
            </div>
          </div>                 
        </form>         
      </>
    )
}

export default FormCadastro;