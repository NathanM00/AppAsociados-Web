import React, { useEffect, useState } from 'react';
import SecComentarios from '../../components/SecComentarios/SecComentarios';
import firebase from '../../utils/firebase'

function VistaGeneral(props) {
  
    return <div>
            <h1>Vista General</h1>
            <h2>Comentarios</h2>
            <SecComentarios></SecComentarios>
    </div>
}

export default VistaGeneral;