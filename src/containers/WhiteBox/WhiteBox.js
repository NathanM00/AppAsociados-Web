import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import Form from '../../components/Form/Form';

function WhiteBox(props) {

    const classes = useStyles();

    const [name, setName] = useState("");
    
   function handleChange(input){
     // console.log(input);
    }

    return (
        <Card className={classes.root} height={props.size !== "" ? props.size : "auto"}>
            <CardContent>
              <p className={classes.title}>
                {props.title}
              </p>
              {props.hasImage === true &&   
              <img
                  className={classes.media}
                  src={require("../../resources/"+props.image+".png")}
                  title={props.imageHover}
                />
            }
            {props.hasDesc === true &&   
              <p className={classes.desc}>
                {props.desc}
              </p>
            }
              {props.hasForm === true &&   
                  <Form form={props.form}></Form>
              }
            </CardContent>          
        </Card>
      );
}

export default WhiteBox;

const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      height: 'auto',
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
      height: '7%',
      padding: '3% 10% 0 5%',
      margin: "0 0 3% 0",
      fontSize: '30px',
      fontWeight: 700,
      width:'auto',
      color: "#474747",
    },
    desc: {
      height: '20%',
      margin: "0 0 5% 0",
      padding: '0 10% 0 5%',
      fontSize: '18px',
    },

  });

   
  