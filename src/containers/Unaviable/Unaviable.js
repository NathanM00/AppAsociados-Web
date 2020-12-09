import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import aaa from '../../resources/lapiz.png'

function Unaviable(props) {

    const classes = useStyles();

    return (
        <Card  className={classes.root2}>
            <CardContent>
            <div className={classes.root}>

            <p className={classes.title}>Página no disponible</p>  

            <img src={aaa} className={classes.media}/>

            <p className={classes.desc}>La sección o funcionalidad a la que esta tratando de acceder esta en mantenimiento ó no esta disponible en este momento. Perdone las molestias, agradecemos su comprensión.</p>

            </div>

            </CardContent>          
        </Card>
      );
}

export default Unaviable;

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: '850px',
      display:'flex',
      justifyContent:'space-evenly',
      alignItems: 'center',
      flexDirection:'column',
    },

    root2: {
      maxWidth: '100%',
      height: '100%',
      backgroundColor: '#FFEEDE',
    },
    media: {
      height: '30%',
      width: '20%',
    },
    title: {
      height: '10%',
      fontSize: '50px',
      fontWeight: 700,
      width:'60%',
      textAlign:'center',
      color: "#474747",
    },   

    desc: {
      height: '20%',
      width:'40%',
      fontSize: '24px',
      textAlign: 'justify',
    },

  });

   
  