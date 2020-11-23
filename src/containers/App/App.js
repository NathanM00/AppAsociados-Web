import React, {useState, useEffect} from 'react';
import {CssBaseline } from '@material-ui/core';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import VistaGeneral from '../../Pages/VistaGeneral/VistaGeneral';
import Noticias from '../../Pages/Noticias/Noticias';
import Analiticas from '../../Pages/Analiticas/Analiticas';
import Soporte from '../../Pages/Soporte/Soporte';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import Eventos from '../../Pages/Eventos/Eventos';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  
  const logOut = () => {
    setUser(null);

  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      if(response){
        //leer datos del usuario
        firebase.database().ref(`/users/${response.uid}`).once('value')
        .then(sanapshot => {
          setUser(sanapshot.val());
        });
      }
    });
  }, []);

  return (
      <Router >
        <div className="App">
        
          <div className="MainContainer">
            <NavBar/>
            <Switch >
              <Route path="/" exact component={VistaGeneral}/>
              <Route path="/analiticas" component={Analiticas}/>
              <Route path="/noticias" component={Noticias}/>
              <Route path="/eventos" component={Eventos}/>
              <Route path='/soporte' component={Soporte}/>
              <Route path='/login' component={Login}/>
              <Route path='/signup' component={SignUp}/>
            </Switch>
          </div>
          
          <CssBaseline />
        </div>
      </Router>

  );
}

export default App;