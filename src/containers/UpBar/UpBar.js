import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from '@material-ui/core';
import lupa from '../../resources/lupa.png';
import triangulo from '../../resources/triangulo.png';
import calendario from '../../resources/calendario.png';

function UpBar(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Card  className={classes.extra}>
            <div className={classes.extra2}>
                <div className={classes.search1}>
                    <img className={classes.lupa} src={lupa}/>
                    <p className={classes.lupat}>Buscar un servicio o producto</p>
                </div>

                <div className={classes.search2}>
                    <p className={classes.triangulot}>Filtros</p>
                    <img className={classes.triangulo} src={triangulo}/>
                </div>

                <div className={classes.search3}>
                    <p className={classes.calendariot}>Diciembre 2020</p>
                    <img className={classes.calendario} src={calendario}/>
                </div>
            </div>     
        </Card>
        <Card  className={classes.searchbox}>
            <CardContent>
            <Button className={classes.btn}>Buscar</Button>
            </CardContent>     
        </Card>
        </div>
      );
}

export default UpBar;

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '80px',
      display:' flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    lupa:{
        height: '45%',
        width: '6%',
    },
    lupat:{
        height: '100%',
        width: '80%',
        fontSize: '22px',
        color:'#8A8A8A',
        fontWeight: 700,
        paddingLeft:'10%',
        paddingTop:'20px',
    },

    triangulo:{
        height: 'auto',
        width: '10%',
        marginRight:'10%',
    },

    triangulot:{
        height: '100%',
        width: '50%',
        fontSize: '22px',
        color:'#FF7F00',
        fontWeight: 700,
        paddingLeft:'10%',
        paddingTop:'20px',
    },
    calendariot:{
        height: '100%',
        width: '80%',
        fontSize: '22px',
        color:'#474747',
        fontWeight: 700,
        paddingLeft:'10%',
        paddingTop:'20px',
    },

    calendario:{
        height: 'auto',
        width: '15%',
        marginRight:'10%',
    },

    search1: {
        width: '40%',
        height: '100%',
        display:' flex',
        justifyContent:'flex-start',
        alignItems:'center',  
        marginLeft:'5%',
        borderRight: '2px solid #A4A4A4',
      },

      search2: {
        width: '20%',
        height: '100%',
        display:' flex',
        justifyContent:'center',
        alignItems:'center',    
        borderRight: '2px solid #A4A4A4',
        marginRight:'5%',
    },

      search3: {
        width: '25%',
        height: '100%',
        display:' flex',
        justifyContent:'flex-start',
        alignItems:'center',
    },

    extra: {
        height: '90%',
        width: '80%',
        borderRadius: '20px',
      },

      extra2: {
        height: '100%',
        width: '100%',
        padding: 0,
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'row',
      },


    searchbox: {
      height: '90%',
      width: '18%',
      background: 'linear-gradient(131.74deg, #FFB800 -6.99%, #FF7F00 77.19%, #FF5C00 134.86%)',
      borderRadius: '20px',
    },

    btn: {
        height: '100%',
        width: '100%',
        fontSize: '20px',
        marginTop: '2%',
        fontWeight: 700,
        color:'white',
      },
  

  });

   
  