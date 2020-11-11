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
    margin: "0 0% 2% 5%",
    borderRadius: '25px',
    width: '30%',
    display: 'flex',
    flexWrap: 'wrap',
    height:'92%',
    justifyContent: 'flex-start',
    padding: '0',
    border: '1px solid #C8C8C8',

  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: '35px',
    padding: '5%',
  },
  title: {
    height: '10%',
    padding: '0 10% 0 5%',
    margin: "0",
    fontSize: '25px',
    width: '100%',
    fontWeight: 700,
  },
  date: {
    height: '10%',
    padding: '2% 10% 0 6%',
    margin: "0",
    fontWeight: 'lighter',
    fontSize: '15px',
    width: '60%',
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
  desc: {
    height: '60%',
    margin: "2% 0 2% 0",
    padding: '0 0 0 5%',
    fontSize: '18px',
    color: "#474747",
  },  

});