
import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Comentario from '../Comentario/Comentario';

export default function SecComentarios() {
    const [comentList, setComentList] = useState();

    useEffect(() => {
      const comentRef = firebase.database().ref('Comentarios');
      comentRef.on('value', (snapshot) => {
        const coments = snapshot.val();
        const comentList = [];
        for (let id in coments) {
          comentList.push({ id, ...coments[id] });
        }
        setComentList(comentList);
      });
    }, []);
  
    return (
      <div>
        {comentList
          ? comentList.map((coment, index) => <Comentario coment={coment} key={index} />)
          : ''}
      </div>
    );
  }