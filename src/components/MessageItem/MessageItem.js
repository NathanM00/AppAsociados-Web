import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const MessageItem = ({data, user})=>{
    const classes = useStyles();

    return(
        <div 
            className={classes.container}
            style={{
                justifyContent: data.visto === "si" ? 'flex-end' : 'flex-start'
            }}
            >
              
              
            <div 
                className={classes.messageItem}
                style={{backgroundColor: data.visto === "si" ? '#FFAB58' : '#FFFFFF'}}
                >
                 
                <p className={classes.txt}>{data.mensaje}</p>
                <p className={classes.hora}>{data.hora}</p>
            </div>
            
        </div>
    );
}

export default MessageItem;

const useStyles = makeStyles((theme) => ({
    container: {
        width: 'auto',
        minHeight: '6%',
        height:"auto",
        display: 'flex',
        marginBottom: '1%',
    },

    messageItem: {
        width: 'auto',
        height: '100%',
        maxWidth: '90%',
        display: 'flex',
        flexBasis: 'auto',
        padding: '1%',
        minWidth: '12%',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
    },

    txt: {
        fontSize: '14px',
        display: 'inline-block',
        marginRight: '40px',
        marginBottom: '1%',
    },

    hora: {
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '15px',
        marginTop: '-15px',
    },
   
  }));