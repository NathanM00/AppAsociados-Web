import React from 'react';
import {CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import VistaGeneral from '../../Pages/VistaGeneral/VistaGeneral';
import Noticias from '../../Pages/Noticias/Noticias';
import Analiticas from '../../Pages/Analiticas/Analiticas';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="MainContainer">
             <NavBar/>
             <Switch >
               <Route path="/" exact component={VistaGeneral}/>
               <Route path="/analiticas" component={Analiticas}/>
               <Route path="/noticias" component={Noticias}/>
             </Switch>
        </div>


        <CssBaseline />
      </div>
    </Router>

  );
}

export default App;