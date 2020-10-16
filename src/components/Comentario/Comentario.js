import React from 'react';
import firebase from '../../utils/firebase';

export default function Comentario({ coment }) {
    
  /*const deleteComent = () => {
    const comentRef = firebase.database().ref('Comentario').child(coment.id);
    comentRef.remove();
  };*/

  return (
    <div>
      <h1 >{coment.comentario}</h1>
     {/* <button onClick={deleteComent}>Delete</button>*/}
    </div>
  );
}