import React from 'react';
import LoginController from './components/LoginController';
import CadastroController from './components/CadastroController'
import GrupoController from './components/GrupoController';
import {NovoGrupo} from './components/GrupoController';
import EsqueciMinhaSenha from './components/EsqueciMinhaSenha';
import LancamentoController from './components/LancamentosController';
import {NovoLancamento} from './components/LancamentosController';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

const App = () => (
  <div>
    <AmplifySignOut />
    <Router>
    <Routes>
      <Route path="/" element={<LoginController />} />
      <Route path="/Login" element={<LoginController />} />
      <Route path="/NovoCadastro" element={<CadastroController />} />
      <Route path="/ListaGrupos" element={<GrupoController />} />      
      <Route path="/NovoGrupo" element={<NovoGrupo />} />           
      <Route path="/RecuperarSenha" element={<EsqueciMinhaSenha />} />        
      <Route path="/ListaLancamentos" element={<LancamentoController />} />
      <Route path="/NovoLancamento" element={<NovoLancamento />} />      
    </Routes>
  </Router>
  </div>
);

export default withAuthenticator(App);