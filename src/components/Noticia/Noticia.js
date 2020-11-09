import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export default function Noticia({ news }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

          <h1 className={classes.title}>{news.titular}</h1>
          <h2 className={classes.cuerpo}>{news.cuerpo}</h2>

          <Button  className={classes.edit}>Editar noticia</Button>

    </div>
  );
}

const useStyles = makeStyles({
  root: {
    margin: "0 0% 2% 5%",
    borderRadius: '25px',
    width: '30%',
    display: 'flex',
    flexWrap: 'wrap',
    height:'92%',
    justifyContent: 'center',
    padding: '0',
    border: '1px solid #C8C8C8',

  },
  title: {
    height: '20%',
    padding: '0',
    margin: "10% 0% 0% 0%",
    textAlign: 'center',
    fontSize: '25px',
    width: '100%',
    fontWeight: 700,
  },
  edit:{
    justifyContent:' space-between',
    marginBottom: "2%",
    height: '15%',
    width: '35%',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid #FF9D43',
    color: '#FF9D43',
    fontWeight: 'bold',
    borderRadius: '20px',
    marginRight: '5%'
  },
  cuerpo: {
    height: '40%',
    width: '80%',
    margin: "0",
    padding: '0',
    fontSize: '18px',
    textAlign: 'justify',
    color: "#474747",
  },  

});