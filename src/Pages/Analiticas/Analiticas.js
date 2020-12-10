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
    const [chartType,setChartType]= useState("Eventos");

    function handleClick(e){
        setChartType(e.target.value);
    }

    return (
        <div className={classes.grandContainer}>

            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
                <UpBar></UpBar>
            </Grid>

            <Grid item xs={12}  className={classes.box}>
                <div  className={classes.buttonbox}>
                        <input  type="button" value={"Eventos"}  className={chartType !== "Eventos" ? classes.btn : classes.btnA}  onClick={handleClick}/>
                        <input  type="button" value={"Premios"}  className={chartType !== "Premios" ? classes.btn : classes.btnA}  onClick={handleClick}/>
                        <input  type="button" value={"Convenios"} className={classes.btnInhabilitado}/>
                        <input  type="button" value={"Créditos"} className={classes.btnInhabilitado}/>
                </div>
            </Grid>

            <Grid item xs={12} className={classes.box}>
                <WhiteBox title={"Calificación Eventos"} hasDesc={false} hasChart={true} chartType={chartType}
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
        cursor: 'pointer',
        border: 'none',
        color:'#FF7F00',
        fontSize:'18px',
        fontWeight:700,
        boxShadow: '0px 4px 4px -3px rgba(0,0,0,0.57);',
        transition: '0.5s',
        '&:hover': {  backgroundColor:'#EFEFEF',  },
    },

    btnA: {
        width: '10%',
        height: '95%',
        borderRadius: '20px',
        background:'linear-gradient(131.74deg, #FFB800 -6.99%, #FF7F00 77.19%, #FF5C00 134.86%)',
        marginRight:'5%',
        cursor: 'pointer',
        border: 'none',
        color:'white',
        fontSize:'18px',
        fontWeight:700,
        boxShadow: '0px 4px 4px -3px rgba(0,0,0,0.57);',
        transition: '0.5s',
        '&:hover': {  backgroundColor:'#EFEFEF',  },
    },

    btnInhabilitado: {
        width: '10%',
        height: '95%',
        borderRadius: '20px',
        backgroundColor:'white',
        marginRight:'5%',
        cursor: 'not-allowed',
        border: 'none',
        color:'#FF7F00',
        fontSize:'18px',
        fontWeight:700,
        boxShadow: '0px 4px 4px -3px rgba(0,0,0,0.57);',
        transition: '0.5s',
        '&:hover': {  backgroundColor:'#EFEFEF',  },
    },
    boxChart:{
        height: 'auto',
        zoom: '125%',
    }
  }));
  