import { makeStyles } from '@material-ui/core';
import React from 'react';

const ChatListItem = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <img className={classes.userImg}/>

            <div className={classes.userInfo}>
                <h1 className={classes.userName}>Nombre</h1>
                <p className={classes.lastMsg}>mensaje mensaje mensaje</p>
            </div>

            <div className={classes.hour}>12:00</div>
        </div>
    );

};

export default ChatListItem;

const useStyles = makeStyles((theme) => ({
    container: {
        height: '10%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: '3%',
        
    },

    userImg: {
        width: '10%',
        height: '10%',
        marginRight: '3%',
    },

    userInfo: {
        height: '100%',
        width: '75%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        
    },

    userName: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        
    },

    lastMsg: {
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        margin: '0',
    },

    hour: {
        width: '15%',
        justifyContent: 'flex-end',
    },

  }));