import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListarMarcas from './components/marcas/ListarMarcas';
import Cabecalho from './components/Cabecalho';
import './App.css';

function App() {
  return (
    <Router>
      <Cabecalho />
      <Switch>
        <Route exact path='/'>
          <ListarMarcas />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
