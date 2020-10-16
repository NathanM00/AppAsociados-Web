import React from 'react';
import {CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VistaGeneral from '../VistaGeneral/VistaGeneral';
import Noticias from '../Noticias/Noticias';
import Analiticas from '../Analiticas/Analiticas';
import NavBar from '../../components/NavBar/NavBar';
import firebase from '../../utils/firebase'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path="/" exact component={VistaGeneral}/>
        <Route path="/analiticas" component={Analiticas}/>
        <Route path="/noticias" component={Noticias}/>

        </Switch>

        <CssBaseline />
      </div>
    </Router>

  );
}

export default App;