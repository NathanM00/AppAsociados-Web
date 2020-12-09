import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Form from '../../components/Form/Form';
import Chart from '../../components/Chart/Chart';

function WhiteBox(props) {

    const classes = useStyles();

    return (
        <Card className={classes.root} style={props.hasChart ? {zoom: '125%'} : {}} height={props.size !== "" ? props.size : "auto"}>
            <CardContent>
              {!props.hasForm && !props.hasChart &&
                <p className={classes.title}>
                    {props.title}
                </p>
              }
              {props.hasForm && !props.hasChart &&
                <p className={classes.titleForm}>
                    {props.title}
                </p>
              }
              {props.hasChart && !props.hasForm && 
                <p className={classes.titleChart}>
                    {props.title}
                </p>
              }
              {props.hasImage === true &&   
              <img
                  className={classes.media}
                  src={require("../../resources/"+props.image+".png")}
                  title={props.imageHover}
                />
            }
            {props.hasChart === true &&
              <Chart chartType={props.chartType}></Chart>
            }
            {props.hasDesc === true &&   
              <p className={classes.desc}>
                {props.desc}
              </p>
            }
              {props.hasForm === true &&   
                  <Form editInfo={props.edit} form={props.form}></Form>
              }
            </CardContent>          
        </Card>
      );
}

export default WhiteBox;

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: '100%',
      maxHeight: '50%',
      borderRadius: '10px'
    },
    media: {
      height: 'auto',
      width: 'auto',
      maxWidth: '100%',
      margin: "0 0 5% 0",
      padding: '0 5%',
    },
    title: {
      height: '5%',
      padding: '1% 10% 0 5%',
      margin: "0 0 3% 0",
      fontSize: '32px',
      fontWeight: 700,
      width:'auto',
      color: "#474747",
    },  
    titleChart: {
      height: '5%',
      padding: '1% 10% 0 5%',
      margin: "0 0 3% 0",
      fontSize: '32px',
      fontWeight: 700,
      width:'auto',
      color: "#474747",
      zoom:'80%',
    },    
     titleForm: {
      height: '3%',
      padding: '1% 10% 0 5%',
      margin: "0 0 3% 0",
      fontSize: '32px',
      fontWeight: 700,
      width:'auto',
      color: "#FF7F00",
    },
    desc: {
      height: '20%',
      margin: "0 0 5% 0",
      padding: '0 10% 0 5%',
      fontSize: '18px',
    },

  });

   
  