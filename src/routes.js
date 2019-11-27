import React from  'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Rank from './components/Rank';
import Empresas from './components/Empresas';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Rank} />
                <Route path="/empresa" component={Empresas} />
            </Switch>
        </BrowserRouter>
    );
  }
  
  export default Routes;