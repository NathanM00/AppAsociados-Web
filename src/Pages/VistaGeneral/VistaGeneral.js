import React, { useEffect, useState } from 'react';
import  SecComentarios  from '../../components/SecComentarios/SecComentarios';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
import UpBar from '../../containers/UpBar/UpBar'

//import {comentList}  from "../../utils/setTest";
import Comentario from '../../components/Comentario/Comentario';


function VistaGeneral(props) {
    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
                <UpBar></UpBar>
            </Grid>

            <Grid item xs={3}  className={classes.box}>
                        <WhiteBox title={"Número de Asociados"} hasDesc={false}
                         hasImage={true} image={"numeroAsoFake"} imageHover={"Esta es el numero de asociados a día de hoy"}></WhiteBox>
                </Grid>
                <Grid item xs={3}  className={classes.box}>
                        <WhiteBox title={"Participación en eventos"} hasDesc={false}
                         hasImage={true} image={"participaFake"} imageHover={"Porcentaje de participación a eventos a día de hoy"}></WhiteBox>
                </Grid>
                <Grid item xs={6} className={classes.box} overflow='auto'>
                       <SecComentarios title={"Comentarios de los asociados"} ></SecComentarios>
                </Grid>         

                <Grid item xs={6}  className={classes.box}>
                        <WhiteBox title={"Flujo de Asociados Agosto 2020"} hasDesc={true} desc={"Se ha mantenido un numero de asociados fluctuante, entre 2200 y 2050."}
                         hasImage={true} image={"grafica1"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>

                <Grid item xs={6} className={classes.box}>
                    <WhiteBox title={"Flujo de Participación Agosto"} hasDesc={true} desc={"Se ha mantenido una participación fluctuante, entre 2200 y 2050 asociados participando en actividades."}
                            hasImage={true} image={"grafica2"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>     

            </Grid>
        </div>
    )
}

export default VistaGeneral;

const useStyles = makeStyles((theme) => ({
    grandContainer: {
      padding: "2%",
      overflow: 'auto',
    },
    container: {
        height: 'auto',
      },
    box: {
        height: 'auto',
    },
}));
  