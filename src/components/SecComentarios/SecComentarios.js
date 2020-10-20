import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Comentario from '../Comentario/Comentario';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";

export default function SecComentarios( props) {
  const classes = useStyles();
    const [comentList, setComentList] = useState();

    useEffect(() => {
      const comentRef = firebase.database().ref('Comentarios');
      comentRef.on('value', (snapshot) => {
        const coments = snapshot.val();
        const comentList = [];
        for (let id in coments) {
          comentList.push({id, ...coments[id] } );
        }
        setComentList(comentList);
      });
    }, []);

    return (
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>
            {props.title}
          </p>
          {comentList ? comentList.map((coment,index) => <Comentario className={classes.coment} coment={coment} key={index}/> ) : ''}  
        </CardContent>          
      </Card>
    );
  }

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '100%',
    height: '30%',
  },


  title: {
    height: '7%',
    padding: '3% 10% 0 5%',
    margin: "0 0 5% 0",
    fontSize: '30px',
    fontWeight: 700,
    color: "#474747",
  },

});