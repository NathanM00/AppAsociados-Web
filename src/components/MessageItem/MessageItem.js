import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const MessageItem = ({data, user})=>{
    const classes = useStyles();

    return(
        <div 
            className={classes.container}
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
            >
            <div 
                className={classes.messageItem}
                style={{backgroundColor: user.id === data.author ? '#FFAB58' : '#FFFFFF'}}
                >
                <p className={classes.txt}>{data.body}</p>
                <p className={classes.hora}>12:00</p>
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