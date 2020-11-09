import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'

function Analiticas(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                <Grid item xs={6}  className={classes.box}>
                        <WhiteBox title={"Analiticas"} hasDesc={true} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vestibulum metus, eu condimentum dui. Morbi feugiat eu."}
                         hasImage={true} image={"grafica1"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>
                <Grid item xs={3}  className={classes.box}>
                        <WhiteBox title={"Número de Asociados"} hasDesc={false}
                         hasImage={true} image={"numeroAsoFake"} imageHover={"Esta es el numero de asociados a día de hoy"}></WhiteBox>
                </Grid>
                <Grid item xs={3}  className={classes.box}>
                        <WhiteBox title={"Participación en eventos"} hasDesc={true} desc={"Ha habido un aumento del 15% en la participación desde la implementación de la plataforma"}
                         hasImage={true} image={"participaFake"} imageHover={"Porcentaje de participación a eventos a día de hoy"}></WhiteBox>
                </Grid>

             
            </Grid>
            
                 {/*<h2>Comentarios</h2>
            
             <SecComentarios></SecComentarios>*/}
        </div>
    )
}

export default Analiticas;

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
  