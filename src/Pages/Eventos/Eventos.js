import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
import  SecEventos  from '../../components/SecEventos/SecEventos';

function Eventos(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                <Grid item xs={12}  className={classes.box}>
                     <SecEventos title={"Eventos recientes"} ></SecEventos>
                </Grid>
                <Grid item xs={12}  className={classes.box}>
                        <WhiteBox title={"Nuevo evento"} hasDesc={false}
                         hasImage={false} hasForm={true} form={"full"} ></WhiteBox>
                </Grid>
            </Grid>

        </div>
    )
}

export default Eventos;

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
  