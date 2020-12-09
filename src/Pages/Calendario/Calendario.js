import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Unaviable from '../../containers/Unaviable/Unaviable'

function Calendario(props) {
    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={1} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
            </Grid>         
            
            <Grid item xs={12}  className={classes.box}>
                <Unaviable></Unaviable>
            </Grid>  

            </Grid>
        </div>
    )
}

export default Calendario;

const useStyles = makeStyles((theme) => ({
    grandContainer: {
      padding: "2%",
      overflow: 'auto',
    },
    container: {
        height: 'auto',
      },
    box: {
        height: '100%',
    },
}));
  