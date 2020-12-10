import { makeStyles } from '@material-ui/core/styles';
import {Bar, Radar} from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import { wait } from '@testing-library/react';

function Chart(props){

    const classes = useStyles();
    const [eventList, setEventList] = useState([]);
    const [labelsEventos, setLabelsEventos] = useState([]);
    const [ratingEventos, setRatingEventos] = useState([]);
    const [numberREventos, setNumberREventos] = useState([]);

    const [priceList, setPriceList] = useState([]);
    const [labelsPremios, setLabelsPremios] = useState([]);
    const [canjeosPremio, setCanjeosPremio] = useState([]);
    const [pricePremio, setPricePremio] = useState([]);

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

    useEffect(() => {
        const comentRef = firebase.database().ref('Premios');
        comentRef.on('value', (snapshot) => {
          const events = snapshot.val();
          const priceList = [];
          const labelsPremios = [];
          const canjeosPremio = [];
          const pricePremio = [];
  
          for (let id in events) {
            priceList.push({id, ...events[id] } );
            canjeosPremio.push(events[id].canjeos);
              labelsPremios.push(events[id].nombre);
              pricePremio.push(events[id].puntoR);
  
          }
          setPriceList(priceList.reverse());
          setLabelsPremios(labelsPremios.reverse());
          setCanjeosPremio(canjeosPremio.reverse());
          setPricePremio(pricePremio.reverse());
  
          console.log(priceList);
          console.log(labelsPremios);
          console.log(canjeosPremio);
          console.log(pricePremio);
  
        });
      }, []);
    return (
        <div className={classes.root}>
                    {props.chartType == 'Eventos' && eventList &&  <div >
                        <Bar className={classes.bar}  data={{
                                labels:labelsEventos,
                                datasets:[
                                    {
                                        label:'Calificación dada por los asociados',
                                        data: ratingEventos,
                                        backgroundColor: 'rgba(49, 156, 255, 0.6)',
                                        borderColor	:'rgba(49, 156, 255, 1)',
                                        borderWidth: '3',
                                    },
                                    {
                                        label:'Número de calificaciones',
                                        data: numberREventos,
                                        backgroundColor: 'rgba(255, 184, 0, 0.6)',
                                        borderColor	:'rgba(255, 184, 0, 1)',
                                        borderWidth: '3',

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
        
                    {props.chartType == 'Premios' && eventList &&  <div >        
                  
                    <Radar className={classes.bar}  data={{
                                labels:labelsPremios,
                                datasets:[
                                    {
                                        label:'# de veces que el premio fue canjeado',
                                        data: canjeosPremio,
                                        backgroundColor: 'rgba(49, 156, 255, 0.6)',
                                        borderColor	:'rgba(49, 156, 255, 1)'
                                    },
                                 
                            ],    
                        }}
                        height={400}
                        width={400} 
                        options={{
                            maintainAspectRatio: false,
                            
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
                        </Radar> 
                    
                        </div>
                    }
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