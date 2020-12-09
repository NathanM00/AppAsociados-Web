import { makeStyles } from '@material-ui/core/styles';
import {Bar} from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import { wait } from '@testing-library/react';

function Chart(props){

    const classes = useStyles();
    const [eventList, setEventList] = useState([]);
    const [labelsEventos, setLabelsEventos] = useState([]);
    const [ratingEventos, setRatingEventos] = useState([]);
    const [numberREventos, setNumberREventos] = useState([]);

    useEffect(() => {
      const comentRef = firebase.database().ref('Eventos');
      comentRef.on('value', (snapshot) => {
        const events = snapshot.val();
        const eventList = [];
        const labelsEventos = [];
        const ratingEventos = [];
        const numberREventos = [];

        for (let id in events) {
            eventList.push({id, ...events[id] } );
            ratingEventos.push(events[id].calificacion);
            labelsEventos.push(events[id].destino);
            numberREventos.push(events[id].numCali);

        }
        setEventList(eventList.reverse());
        setLabelsEventos(labelsEventos.reverse());
        setRatingEventos(ratingEventos.reverse());
        setNumberREventos(numberREventos.reverse());

        console.log(eventList);
        console.log(labelsEventos);
        console.log(ratingEventos);
        console.log(numberREventos);

      });
    }, []);

    return (
        <div className={classes.root}>
                    {props.chartType == 'eventos' && eventList &&  <div >

                        <Bar className={classes.bar}  data={{
                                labels:labelsEventos,
                                datasets:[
                                    {
                                        label:'Calificación dada por los asociados',
                                        data: ratingEventos,
                                        backgroundColor: '#319CFF',
                                    },
                                    {
                                        label:'Número de calificaciones',
                                        data: numberREventos,
                                        backgroundColor: '#FFB800',
                                    },
                            ],    
                        }}
                        height={400}
                        width={400} 
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        min: 0,
                                        max:  15,                                       
                                    }
                                }]
                            },
                            layout: {
                                padding: {
                                    left: 0,
                                    right: 50,
                                    top: 0,
                                    bottom: 0
                                }
                            }
                        }}
                        >
                        </Bar> 
                    </div>}
        </div>
 
   
    );
}

export default Chart;

const useStyles = makeStyles({

    root:{
        height: '100%',
        width: '100%',
    },

    bar:{
        height: '100%',
        width: '100%',
    }

});