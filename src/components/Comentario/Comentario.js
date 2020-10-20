import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export default function Comentario({ coment }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className={classes.header}>
          <h1 className={classes.title}>{coment.nombre}</h1>
          <h1 className={classes.date}>{coment.fecha}</h1>
      </div>

      <h1 className={classes.desc}>{coment.comentario}</h1>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFEEDE',
    margin: "0 5% 2% 5%",
    borderRadius: '25px',
    width: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '3%',
  },
  title: {
    height: '7%',
    padding: '0 10% 0 5%',
    margin: "0",
    fontSize: '25px',
    width: '50%',
    fontWeight: 700,
  },
  date: {
    height: '7%',
    padding: '2% 10% 0 0%',
    margin: "0",
    fontSize: '15px',
    textAlign: 'right',
    width: '50%',
  },
  header:{
    display: 'flex',
    justifyContent:' space-between',
    marginBottom: "2%",

  },
  desc: {
    height: '20%',
    margin: "2% 0 2% 0",
    padding: '0 0 0 5%',
    fontSize: '18px',
    color: "#474747",
  },  

});