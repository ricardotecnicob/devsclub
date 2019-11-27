import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Rank from './components/Rank';
import Empresas from './components/Empresas';
import Login from './components/Login';
import Cadastros from './components/Cadastros';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Rank} />
                <Route path="/empresa" component={Empresas} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrar" component={Cadastros} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;