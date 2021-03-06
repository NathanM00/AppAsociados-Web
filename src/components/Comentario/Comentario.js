import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Comentario({ coment }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.header}>
          <h1 className={classes.title}>{coment.nombre}</h1>
          <h1 className={classes.date}>Sección: {coment.seccion}</h1>
          <h1 className={classes.date}>{coment.fecha}</h1>
      </div>
      <h1 className={classes.desc}>{coment.comentario}</h1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    borderLeft: '5px solid #FF9D43',
    boxShadow: '5px 5px 3px -3px rgba(0,0,0,0.34)',
    margin: "0 5% 2% 5%",
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    height:'45%',
    justifyContent: 'space-evenly',
    padding: '3%',
  },
  title: {
    height: '100%',
    padding: '0 10% 0 5%',
    margin: "0",
    fontSize: '25px',
    width: '50%',
    fontWeight: 700,
  },
  seccion: {
    height: '100%',
    padding: '2% 10% 0 0%',
    margin: "0",
    fontSize: '15px',
    textAlign: 'right',
    width: '50%',
    borderRight: '2px solid #000',
  },
  date: {
    height: '100%',
    padding: '2% 10% 0 0%',
    margin: "0",
    fontSize: '15px',
    textAlign: 'right',
    width: '50%',
  },
  header:{
    display: 'flex',
    justifyContent:' space-between',
    height: '42%',
  },
  desc: {
    height: '60%',
    margin: "2% 0 2% 0",
    padding: '0 0 0 5%',
    fontSize: '18px',
    color: "#474747",
  },  

});