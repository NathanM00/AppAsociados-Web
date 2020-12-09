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
    backgroundColor:"#4F4F4F",
    display: 'flex',
    flexWrap: 'wrap',
    height:'92%',
    justifyContent: 'center',
    padding: '0',
    boxShadow: '5px 5px 3px -3px rgba(0,0,0,0.57);',
  },
  title: {
    height: '12%',
    color:"white",
    marginTop:'10%',
    fontSize: '22px',
    textAlign:'center',
    width: '90%',
    fontWeight: 700,
  },
  edit:{
    height: '15%',
    width: '45%',
    textAlign: 'center',
    backgroundColor: '#FF7F00',
    color: '#ffffff',
    fontWeight: 'bold',
    borderRadius: '20px',
  },
  cuerpo: {
    height: '30%',
    width: '80%',
    margin: "0",
    color: '#ffffff',
    padding: '0',
    fontWeight: 'lighter',
    fontSize: '18px',
    textAlign: 'justify',
  },  

});