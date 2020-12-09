import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const MessageItem = ({data, user})=>{
    const classes = useStyles();

    return(
        <div 
            className={classes.container}
            style={{
                justifyContent: data.recibe === data.envia ? 'flex-end' : 'flex-start'
            }}
            >
            <div 
                className={classes.messageItem}
                style={{backgroundColor: data.recibe === data.envia ? '#FFAB58' : '#FFFFFF'}}
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
        width: '100%',
        minHeight: '6%',
        display: 'flex',
        marginBottom: '1%',
    },

    messageItem: {
        height: '100%',
        maxWidth: '90%',
        display: 'flex',
        flexBasis: 'auto',
        padding: '1%',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
    },

    txt: {
        fontSize: '14px',
        display: 'inline-block',
        marginRight: '20px'
    },

    hora: {
        fontSize: '11px',
        display: 'flex',
        justifyContent: 'flex-end',
        height: '15px',
        marginTop: '-15px',
    },
   
  }));