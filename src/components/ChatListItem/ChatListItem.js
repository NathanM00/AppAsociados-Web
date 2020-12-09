import { makeStyles } from '@material-ui/core';
import React, {useState, useEffect} from 'react';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const ChatListItem = ({onClick, active, data}) => {
    const classes = useStyles();

    const [chatItem, setChatItem] = useState ([
        /*mensaje: [],
        hora: [],
        nombre: [],
        chat: '',*/
    ]);

    useEffect(() => {
        const refItem = firebase.database().ref('Chats');
        const chat = refItem.child(`${data.id}`);

        chat.on('value', (snapshot) => {
            const chat = snapshot.val();
            const list = [];
            for(let id in chat){
                list.push({id, ...chat[id]});
            }
            setChatItem(list.reverse());
            console.log(chatItem);
        });

    }, [])


    return (
        <div className={`${classes.container} ${classes.active?'active':''}`} onClick={onClick}>
            <img className={classes.userImg}/>

            <div className={classes.userInfo}>
                <h1 className={classes.userName}>{data.id}</h1>
                <p className={classes.lastMsg}>{chatItem.mensaje}</p>
            </div>

            <div className={classes.hour}>{data.hora}</div>
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