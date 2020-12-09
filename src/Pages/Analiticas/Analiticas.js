import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
import UpBar from '../../containers/UpBar/UpBar'
import Chart from '../../components/Chart/Chart';

function Analiticas(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>

        <Chart></Chart>


            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
                <UpBar></UpBar>
            </Grid>

            </Grid>
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
  