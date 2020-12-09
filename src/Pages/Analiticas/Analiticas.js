import React, { useEffect, useState } from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
import UpBar from '../../containers/UpBar/UpBar'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';

function Analiticas(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>

            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
                <UpBar></UpBar>
            </Grid>

            <Grid item xs={12}  className={classes.box}>
                <div  className={classes.buttonbox}>
                        <Button className={classes.btn}>Eventos</Button>
                        <Button className={classes.btn}>Buscar</Button>            
                </div>
            </Grid>

            <Grid item xs={12} className={classes.box}>
                <WhiteBox title={"Calificación Eventos"} hasDesc={false} hasChart={true} chartType={'eventos'}
                            hasImage={false} hasForm={false} form={"full"} ></WhiteBox>
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
    buttonbox:{
        height: '60px',
        width: '100%',
        display:'flex',
        justifyContent:'flex-start',
        flexDirection: 'row',
        marginBottom:'2%',
    },
    btn: {
        width: '10%',
        height: '95%',
        borderRadius: '20px',
        backgroundColor:'white',
        marginRight:'5%',
        color:'#FF7F00',
        fontWeight:700,
        boxShadow: '0px 4px 4px -3px rgba(0,0,0,0.57);',
    },
    boxChart:{
        height: 'auto',
        zoom: '125%',
    }
  }));
  