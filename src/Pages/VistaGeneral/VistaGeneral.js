import React, { useEffect, useState } from 'react';
import  SecComentarios  from '../../components/SecComentarios/SecComentarios';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
//import {comentList}  from "../../utils/setTest";
import Comentario from '../../components/Comentario/Comentario';


function VistaGeneral(props) {
    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                <Grid item xs={6}  className={classes.box}>
                        <WhiteBox title={"Vista General"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vestibulum metus, eu condimentum dui. Morbi feugiat eu."}
                         hasImage={true} image={"grafica1"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>
                <Grid item xs={6} className={classes.box}>
                       <SecComentarios title={"Comentarios de los asociados"} ></SecComentarios>
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
  