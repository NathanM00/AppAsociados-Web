import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

export default function Evento({ event }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          {event.archivo !== "" &&   
          <img  src={event.archivo} className={classes.image}title={event.destino} />
         }
          <h1 className={classes.title}>{event.destino}</h1>
          <h1 className={classes.date}>{event.fecha}</h1>
          <Button  className={classes.edit}>Editar evento</Button>
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
    justifyContent: 'flex-start',
    padding: '0',
    boxShadow: '5px 5px 3px -3px rgba(0,0,0,0.57);',

  },
  image: {
    width: '100%',
    height: '60%',
  },

  title: {
    height: '12%',
    padding: '0 10% 0 5%',
    color:"white",
    fontSize: '25px',
    width: '100%',
    fontWeight: 700,
  },
  date: {
    height: '10%',
    padding: '1% 10% 0 6%',
    margin: "0",
    fontWeight: 'lighter',
    fontSize: '20px',
    color: '#ffffff',
    width: '50%',
  },
  edit:{
    justifyContent:' space-between',
    marginBottom: "2%",
    height: '15%',
    width: '45%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF7F00',
    color: '#ffffff',
    fontWeight: 'bold',
    borderRadius: '15px',
    marginRight: '5%'
  },
  desc: {
    height: '60%',
    margin: "2% 0 2% 0",
    padding: '0 0 0 5%',
    fontSize: '18px',
    color: "#474747",
  },  

});