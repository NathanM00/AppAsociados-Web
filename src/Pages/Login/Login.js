import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import './Login.css';

const Login = (props, {onReceive}) => {
  const classes = useStyles();

  const [user, setUser] = useState({
      email: '',
      password: '',
  });

  const handleChange = (e) => {
      setUser({
          ...user,
          [e.target.name] : e.target.value,
          
      });
  }

  const handelLogin = (e) => {
      e.preventDefault();

      firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(response => {
          props.history.push('/');
      })
      .catch(error => {
          console.log(error);
          alert(error.message);
      });
  };

  return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.titular}  >
          Login
        </Typography>
        <form className={classes.form} onSubmit={handelLogin}>
          <TextField className={classes.text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nombre de usuario"
            name="email"
            autoComplete="email"
            autoFocus
            defaultValue={user.email}
            onChange={handleChange}/>

          <TextField className={classes.text}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            defaultValue={user.password}
            onChange={handleChange}/>

          <Button id='btn' className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary">
            Ingresar
          </Button>
          
          <Grid container  className={classes.signup}>
            <Grid item className={classes.item}>
              <Link href="#" variant="body2" className={classes.nContra}>
                ¿Olvidaste tu Contraseña?
              </Link>
            </Grid>
          </Grid>
        </form>
        <CssBaseline />
      </div>
  );
}
export default withRouter(Login);

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(25),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '30%', // Fix IE 11 issue.
      height: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      marginTop: '8%',
      fontSize: '18px',
      marginBottom: '0',
      width: '100%',
      textTransform: 'none',
      backgroundColor: '#FF7F00',
      borderRadius: '100px',
      height: '6%',
    },
    titular: {
      margin: 0,
      width: '30%',
      fontSize: '35px',
      color: '#787878',
      height: 'auto',
    },
    controllabel:{
    },
    text: {
      margin: "5% 0 0 0",
      marpagin: "5% 0 0 0",
      width: '100%',
      height: '7%', 
    },
    label: {
      margin: 0,
      width: '100%',
      verticalAlign: 'center',
      height: '10%',   
    },
    check:{
      width: '10%',
      height: '100%',   
    },
    signup:{
      margin: "5% 0 0 0",
      width: '100%%',
      height: '10%',
    },
    item:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: "0% 0 0 0",
      width: '100%%',
      height: '50%',
    },
    nContra:{
      display: 'flex',
      color: '#3F3F3F',
      fontSize: '18px',
      justifyContent: 'center',
      alignItems: 'center',
      margin: "0",
      width: '100%%',
      height: '50%',
    },

  }));