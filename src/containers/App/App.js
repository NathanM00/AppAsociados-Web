import React, {useState, useEffect} from 'react';
import {CssBaseline } from '@material-ui/core';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';
import VistaGeneral from '../../Pages/VistaGeneral/VistaGeneral';
import Noticias from '../../Pages/Noticias/Noticias';
import Analiticas from '../../Pages/Analiticas/Analiticas';
import Soporte from '../../Pages/Soporte/Soporte';
import Login from '../../Pages/Login/Login';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import Eventos from '../../Pages/Eventos/Eventos';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import Calendario from '../../Pages/Calendario/Calendario';

function App() {

  const [user, setUser] = useState(undefined);
  const [redirectMain, setRedirectMain] = useState(false);
  
  const logOut = () => {
    setUser(undefined);
    firebase.auth().signOut();

  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(response => {
      if(response){
        //leer datos del usuario
        firebase.database().ref(`/users/${response.uid}`).once('value')
        .then(sanapshot => {
       
          setUser(sanapshot.val());
      
            setRedirectMain(true)
    
     
        });
      }
    });
   // logOut();
  }, []);

  return (
      <Router >
        <div className="App">
        
          <div className="MainContainer">
         
      
            <Switch >

          
        
            {user !== undefined?<>     
              <NavBar/>
              <Route path="/" exact component={VistaGeneral}/>
              <Route path="/analiticas" component={Analiticas}/>
              <Route path="/noticias" component={Noticias}/>
              <Route path="/eventos" component={Eventos}/>
              <Route path='/soporte' component={Soporte}/>
              <Route path='/calendario' component={Calendario}/>

              {redirectMain === true ?<Redirect to="/"/>:<></>}
            
              </>
            :
            <Route path='/login' component={Login}/> }

            
            {user === undefined ? <Redirect to="/login" /> :<></>}
         
          
            </Switch>
          </div>
          
          <CssBaseline />
        </div>
      </Router>

  );
}

export default App;