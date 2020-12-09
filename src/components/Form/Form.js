import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import React from 'react';
import firebase from '../../utils/firebase';

function Form(props){

    if(props.editInfo !== null){
        console.log(props.editInfo);
    }

    const [archivoAd, setArchivoAdj] = React.useState(null);
    const [fileUrl, setFileUrl] = React.useState(null);

    const classes = useStyles();

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        setArchivoAdj(fileRef);
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
      };
    

      const onSubmit = async (e) => {
        e.preventDefault();

        const eventRef = firebase.database().ref('Eventos');
        const noticiaRef = firebase.database().ref('Noticias');

        if(props.form === "full"){

            const destino = e.target.destino.value;
            const fecha = e.target.fecha.value;
            const descripcion = e.target.descripcion.value;

            if (!destino || !fileUrl || !descripcion || !fecha) {
                console.log('Evento no se subio')
            } else{

                var evento = {
                    destino: destino,
                    fecha: fecha,
                    archivo: fileUrl,
                    descripcion: descripcion,
                    comentarios:"",
                    numCali:0,
                    calificacion: {
                      inicial: 5,
                    },
                  };

                  eventRef.push(evento).then(pushed_user => {
                    evento = {
                      destino: destino,
                      fecha: fecha,
                      archivo: fileUrl,
                      descripcion: descripcion,
                      comentarios:"",
                      numCali:0,
                      calificacion: 0,
                      id: pushed_user.key,
                    }

                    eventRef.child(pushed_user.key).update(evento);
                    console.log('Evento subido')
                  });

            }
        } else if(props.form === "noFull"){

            const titular = e.target.titular.value;
            const cuerpo = e.target.cuerpo.value;
            console.log(cuerpo)
            console.log(titular)
            console.log(fileUrl)

            if (!cuerpo || !titular || !fileUrl) {
                console.log('Noticia no se subio')
            } else{

                const noticia = {
                    titular: titular,
                    archivo: fileUrl,
                    cuerpo: cuerpo,
                  };

                  noticiaRef.push(noticia);

                  console.log('Noticia subido')
            }
        }
        e.target.reset();
      };

    
      return (  <form className={classes.form} onSubmit={onSubmit}>

                {props.form === "full" &&   
                <div className={classes.form_top}>
                    <label className={classes.form_label}>Destino:</label>
                    <input name={"destino"}  className={classes.form_input} placeholder="Lugar de destino" type="text"/>
                    <label className={classes.form_label}>Fecha:</label>
                    <input name={"fecha"}className={classes.form_input} placeholder="Día/Mes/Año" type="date"/>
                </div>    
                }
                {props.form === "noFull" &&   
                    <div className={classes.form_top}>
                        <label className={classes.form_label}>Titular:</label>
                        <input name={"titular"} className={classes.form_input} placeholder="Titular de la noticia" type="text"/>
                        <label className={classes.form_label} style={{visibility: 'hidden' }} >Fecha:</label>
                        <input className={classes.form_input} style={{visibility: 'hidden' }} placeholder="Día/Mes/Año" type="date"/>
                    </div>
                }
                {props.form === "full" &&   
                    <div className={classes.form_mid}>
                        <label className={classes.form_label}>Descripción:</label>
                        <textarea  name={"descripcion"} placeholder="Descripción de la actividad"  className={classes.form_tarea} rows="4" cols="30"/>
                    </div>
                }
                {props.form === "noFull" &&   
                    <div className={classes.form_mid}>
                        <label className={classes.form_label}>Cuerpo:</label>
                        <textarea  name={"cuerpo"} placeholder="Cuerpo de la noticia" className={classes.form_tarea} rows="4" cols="30"/>
                    </div>
                }
                <div className={classes.form_bot}>
                    <label className={classes.form_label}>Archivos Adjuntos:</label>
                    {archivoAd !== null &&   
                        <p className={classes.form_archivos}>{archivoAd.name}</p>
                    } 
                    {archivoAd === null &&   
                        <p className={classes.form_archivos}>0 Archivos Adjuntos</p>
                    }
                    <div className={classes.form_buttonArea}>
                    <Button className={classes.form_button} >Adjuntar</Button>
                    <Button className={classes.form_button}>Previsualizar</Button>
                    <Button  type="submit" className={classes.form_button}>Publicar Evento</Button>
                    <input onChange={onFileChange} style={{opacity: '0',position: 'absolute', height: '8%', width: '11%', marginRight: '26%',}} type={"file"} accept={"image/png, image/jpeg"}/>
                    </div>
                </div>
        </form>

      );
    }
  
  export default Form;


const useStyles = makeStyles({
  form_top: {
    width: '100%',
    height: '20%',
    margin: "0 0 2% 0",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form_mid: {
    width: '100%',
    height: '20%',
    margin: "0 0 2% 0",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  form_bot: {
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    height: '90%',
    margin: "0",
    padding: '0 10% 0 10%',
    display: 'flex',
    flexDirection: 'column',
  },
  form_input: {
    width: '50%',
    height: '100%',
    margin: "0 5% 0 5%",
    padding: '0',
    fontSize: '20px',
    fontFamily: 'Roboto',
    paddingLeft: '2%',
    border: 'none',
    borderBottom: '3px solid #C8C8C8',
  },
  form_tarea: {
    width: '100%',
    height: '100%',
    margin: "0 5% 0 0",
    padding: '1% 0 0 2%',
    fontFamily: 'Roboto',
    fontSize: '20px',
    border: '3px solid #C8C8C8',
    borderRadius: '15px',
    resize: 'none',

  },
  form_label: {
    width: '20%',
    height: '100%',
    margin: "0",
    color:'#6C6C6C',
    fontWeight:'bold',
    padding: '0',
    fontSize: '25px',
  },
  form_archivos: {
    width: '20%',
    height: '100%',
    margin: "0",
    padding: '0',
    fontSize: '15px',
    textAlign: 'center',
  },
  form_buttonArea: {
    width: '60%',
    height: '100%',
    margin: "2% 2% 0 0",
    padding: '0',
    display: 'flex',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: '20px',
  },
  form_button: {
    justifyContent:' space-between',
    marginBottom: "2%",
    height: '15%',
    width: '30%',
    textAlign: 'center',
    justifyContent: 'center',
    border: '1px solid #FF9D43',
    color: '#FF9D43',
    fontWeight: 'bold',
    borderRadius: '20px',
    marginRight: '5%'
},
});