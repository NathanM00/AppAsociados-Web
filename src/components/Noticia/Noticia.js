import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export default function Noticia(props) {
  const classes = useStyles();


  function handleClick(){
    props.onClick(props.news);
}

  return (
    <div className={classes.root}>

          <h1 className={classes.title}>{props.news.titular}</h1>
          <h2 className={classes.cuerpo}>{props.news.cuerpo}</h2>

          <Button onClick={handleClick} className={classes.edit}>Editar noticia</Button>

    </div>
  );
}

const useStyles = makeStyles({
  root: {
    margin: "0.5% 0% 0 5%",
    borderRadius: '25px',
    width: '30%',
    display: 'flex',
    flexWrap: 'wrap',
    height:'92%',
    justifyContent: 'center',
    padding: '0',
    border: 'solid 1px grey',
  },
  title: {
    height: '20%',
    padding: '0',
    margin: "10% 0% 0% 0%",
    textAlign: 'center',
    fontSize: '24px',
    width: '90%',
    fontWeight: 700,
  },
  edit:{
    justifyContent:' space-between',
    marginBottom: "2%",
    height: '15%',
    width: '35%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF9D43',
    color: '#ffffff',
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