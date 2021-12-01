import React from 'react';
import './Form-Login.css';
import './Buttons.css';

const FormLogin = () => {

  const OnNovoCadastro = () => {
      window.location.href = '/NovoCadastro';
    }

  const OnEntrarClick = () =>{
    window.location.href = '/ListaGrupos'; 
  } 
  
    return (        
      <>    
        <form  action="/ListaGrupos" class="formLogin validate-form">
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

          <div class="btnConfirmarContainer">
            <div class="divBtnConfirmar">
              <div class="btnConfirmarBackGround"></div>
              <button class="btnConfirmar" onClick = {OnEntrarClick}>
                Entrar
              </button>
            </div>
          </div>              
        </form>    
        
        <div class="btnConfirmarContainer">
          <div class="divBtnConfirmar">
            <div class="btnCadastrarBackGround"></div>
            <button class="btnCadastrar" onClick = {OnNovoCadastro}>
              Quero Cadastrar
            </button>      
          </div>
        </div>        

      <div class="textCentralizado p-t-80">
        <a class="esqueciMinhaSenha" href="/RecuperarSenha">
          Esqueci minha senha
        </a>
      </div>                           
      </>  
    );
}

export default FormLogin;