import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Form from '../../components/Form/Form';

function UpBar(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Card  className={classes.extra}>
            <CardContent>
                <div>

                </div>
            </CardContent>     
        </Card>
        <Card  className={classes.search}>
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

    extra: {
        height: '90%',
        width: '80%',
        borderRadius: '20px',
      },

    search: {
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

   
  