import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';

function WhiteBox(props) {

    const classes = useStyles();

    const [name, setName] = useState("");
    
   function handleChange(input){
     // console.log(input);
    }

    return (
        <Card className={classes.root} height={props.size !== "" ? props.size : "auto"}>
            <CardContent>
              <p className={classes.title}>
                {props.title}
              </p>
              {props.hasImage === true &&   
              <img
                  className={classes.media}
                  src={require("../../resources/"+props.image+".png")}
                  title={props.imageHover}
                />
            }
            {props.hasDesc === true &&   
              <p className={classes.desc}>
                {props.desc}
              </p>
            }
              {props.hasForm === true &&   
              <form className={classes.form}>

                     {props.form === "full" &&   
                        <div className={classes.form_top}>
                            <label className={classes.form_label}>Destino:</label>
                            <input className={classes.form_input} type="text"/>
                            <label className={classes.form_label}>Fecha:</label>
                            <input className={classes.form_input} placeholder="Día/Mes/Año" type="date"/>
                        </div>    
                      }
                      {props.form === "noFull" &&   
                            <div className={classes.form_top}>
                              <label className={classes.form_label}>Titular:</label>
                              <input className={classes.form_input} type="text"/>
                              <label className={classes.form_label} style={{visibility: 'hidden' }} >Fecha:</label>
                              <input className={classes.form_input} style={{visibility: 'hidden' }} placeholder="Día/Mes/Año" type="date"/>
                            </div>
                      }
                      {props.form === "full" &&   
                            <div className={classes.form_mid}>
                                <label className={classes.form_label}>Descripción:</label>
                                <textarea className={classes.form_tarea} rows="4" cols="30"/>
                            </div>
                      }
                      {props.form === "noFull" &&   
                            <div className={classes.form_mid}>
                                <label className={classes.form_label}>Cuerpo:</label>
                                <textarea className={classes.form_tarea} rows="4" cols="30"/>
                            </div>
                      }
                        <div className={classes.form_bot}>
                          <label className={classes.form_label}>Archivos Adjuntos:</label>
                          <p className={classes.form_archivos}>0 Archivos Adjuntos</p>
                          <div className={classes.form_buttonArea}>
                            <Button className={classes.form_button} >Adjuntar</Button>
                            <Button className={classes.form_button}>Previsualizar</Button>
                            <Button className={classes.form_button}>Publicar Evento</Button>
                            <input style={{opacity: '0',position: 'absolute', height: '8%', width: '11%', marginRight: '26%',}} type={"file"} accept={"image/png, image/jpeg"}/>
                          </div>
                        </div>
              </form>

              }
            </CardContent>          
        </Card>
      );
}

export default WhiteBox;

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '50%',
      borderRadius: '10px'
    },
    media: {
      height: 'auto',
      width: 'auto',
      maxWidth: '100%',
      margin: "0 0 5% 0",
      padding: '0 5%',
    },
    title: {
      height: '7%',
      padding: '3% 10% 0 5%',
      margin: "0 0 3% 0",
      fontSize: '30px',
      fontWeight: 700,
      width:'auto',
      color: "#474747",
    },
    desc: {
      height: '20%',
      margin: "0 0 5% 0",
      padding: '0 10% 0 5%',
      fontSize: '18px',
    },
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
      margin: "0 0 2% 0",
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
      padding: '0',
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

   
  