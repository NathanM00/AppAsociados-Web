import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const ChatListItem = ({props, onClick, active, data}) => {
    const classes = useStyles();

    const [chatItem, setChatItem] = useState ([]);

    useEffect(() => {
        const refItem = firebase.database().ref('Chats');
        const chat = refItem.child(data.id);

        chat.on('value', (snapshot) => {
            const messages = snapshot.val();
            const chatItem = [];
            for(let id in messages){
                chatItem.push({id, ...messages[id]});
            }
            chatItem.pop();
            var ultimoMensajelist= chatItem[chatItem.length-1];
            console.log(ultimoMensajelist);
            setChatItem(ultimoMensajelist);
            console.log(chatItem);

        });

    }, [])

    function handleClick() {
        props.onClick(data);
    }

    return (
        <div className={`${classes.container} ${classes.active?'active':''}`} onClick={handleClick}>
            <img className={classes.userImg}/>

            <div className={classes.userInfo}>
                <h1 className={classes.userName}>{chatItem.envia}</h1>
                <p className={classes.lastMsg}>{chatItem.mensaje}</p>
            </div>

            <div className={classes.hour}>{chatItem.hora}</div>
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
        cursor: 'pointer',
    },

    active: {
        backgroundColor: '#FFFFFF',
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