import React, { useEffect, useState } from 'react';
import SecComentarios from '../../components/SecComentarios/SecComentarios';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'

function Noticias(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                <Grid item xs={6}  className={classes.box}>
                        <WhiteBox title={"Noticias"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vestibulum metus, eu condimentum dui. Morbi feugiat eu."}
                         hasImage={true} image={"grafica1"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>
           
                <Grid item xs={6}  className={classes.box}>
                </Grid>
                <Grid item xs={6}  className={classes.box}>
                        <WhiteBox title={"Caja 1"} desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non vestibulum metus, eu condimentum dui. Morbi feugiat eu."}
                         hasImage={true} image={"grafica1"} imageHover={"Esta es la grafica 1"}></WhiteBox>
                </Grid>
             
            </Grid>
            
                 
        </div>
    )
}

export default Noticias;

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
  