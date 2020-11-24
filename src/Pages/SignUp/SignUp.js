import React from 'react';
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
import Container from '@material-ui/core/Container';

export default function SignUp() {
  const classes = useStyles();

  return (
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography className={classes.titular} component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2} xs={12} className={classes.gridAlfa}>
            <Grid item xs={12} sm={6} className={classes.grid}>
              <TextField className={classes.text}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid}>
              <TextField className={classes.text}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <TextField className={classes.text}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <TextField className={classes.text}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
            <FormControlLabel className={classes.label}
            control={<Checkbox className={classes.check} value="allowExtraEmails" color="primary" />}
            label={ <span className={classes.controllabel}>I want to receive inspiration, marketing promotions and updates via email.</span>}
            />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end"  className={classes.signup}>
            <Grid item className={classes.item}>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '40%', // Fix IE 11 issue.
    height: '60%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    margin: 0,
    width: '100%%',
    height: '10%',
    height: '10%',
  },
  titular: {
    margin: 0,
    width: '40%',
    height: 'auto',
  },
  controllabel:{
  },
  text: {
    margin: "0 0 0 0",
    width: '100%',
    height: '75%',
  },
  grid: {
    width: '100%',
    height: '25%',
  },
  gridAlfa: {
    width: '100%',
    height: '72%',
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    paddingTop: '5%',
  },
  label: {
    margin: 0,
    width: '100%',
    verticalAlign: 'center',
    height: '100%',   
  },
  check:{
    width: '10%',
    height: '100%',   
  },
  signup:{
    margin: "5% 0 0 0",
    width: '100%%',
    height: '20%',
  },

  item:{
    margin: "0% 0 0 0",
    width: '100%%',
    height: '100%',
  },
}));