import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Evento from '../Evento/Evento';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from '@material-ui/core';

export default function SecEventos( props) {
  const classes = useStyles();
  const [eventList, setEventList] = useState([]);

    useEffect(() => {
      const eventRef = firebase.database().ref('Eventos');
      eventRef.on('value', (snapshot) => {
        const events = snapshot.val();
        const eventList = [];
        for (let id in events) {
          eventList.push({id, ...events[id] } );
        }
        setEventList(eventList.reverse());
      });
    }, []);

    return (
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>
            {props.title}
          </p>
          <div className={classes.events}>
              {eventList ? eventList.map((event,index) =>

              <Evento className={classes.event} event={event} key={index}/> ) : ''}  
          </div>

             
        </CardContent>       
      </Card>
    );
  }

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '100%',
    height: '420px',
    overflow: 'scroll',

  },

  title: {
    height: '13%',
    padding: '1% 10% 0 5%',
    margin: "0 0 2% 0",
    fontSize: '30px',
    fontWeight: 700,
    color: "#FF7F00",
  },

  events: {
    width: '100%',
    height: '75%',
    display: 'box',
    justifyContent:'flex-start',
    alignItems:'center',
    overflow: 'scroll',
    flexDirection: 'row',
  },

});