import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MessageItem from '../../components/MessageItem/MessageItem';
import './ChatWindow.css';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const ChatWindow = ({user, chatList, id, data})=>{
    const classes = useStyles();

    const [text, setText] = useState('');

    const body = useRef();

    /*const [list, setList] = useState([]);

    useEffect(() => {
        const refItem = firebase.database().ref('Chats');
        const chat = refItem.child(id.id);

        chat.on('value', (snapshot) => {
            const messages = snapshot.val();
            const list = [];
            for(let id in messages){
                list.push({id, ...messages[id]});
            }
            list.pop();
            var ultimoMensajelist= list[list.length-1];
            console.log(ultimoMensajelist);
            setList(list);
            console.log(list);

        });

    }, [])*/

    const [info, setInfo] = useState ([]);

    useEffect(() => {
        const refItem = firebase.database().ref('Chats');
        const chat = refItem.child(id.id);

        chat.on('value', (snapshot) => {
            const messages = snapshot.val();
            const info = [];
            for(let id in messages){
                info.push({id, ...messages[id]});
            }
            //chatItem.pop();
            //var ultimoMensajelist= chatItem[chatItem.length-1];
            //console.log(ultimoMensajelist);
            setInfo(info);
            console.log(info);

        });

    }, [])

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [info])

    return (
        <div className={classes.container}>
            <div className={classes.header}>
            <h1 className={classes.userName}>{info.envia}</h1>
                </div>

                <div className={classes.container_chat}>
                    <div ref={body} className="msgList">
                        {info ? info.map((data, key) =>
                            <MessageItem
                                key={key}
                                data={data}
                            />
                        ): ''}
                    </div>

                    <div className={classes.chatbar}>
                        <div className={classes.msg}>
                            <input className={classes.mesageInput} 
                                type="text" 
                                placeholder="Escribe un mensaje aqui"
                                value={text}
                                onChange={e=>setText(e.target.value)}
                            />
                            <Button className={classes.btn_enviar}>Enviar</Button>
                        </div>
                    </div>
                    
                </div>
        </div>
    );

}

export default ChatWindow;

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFEEE0',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
    },

    header: {
        height: '9%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        padding: '2%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: '20px',
    },

    userName: {
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'transparent',
        border: '0',
    },

    container_chat: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },

    chatbar: {
        height: '11%',
        width: '100%',
        padding: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignContent: 'flex-end',
        border: '0',
        borderRadius: '100px',

    },

    msg: {
        height: '100%',
        width: '100%',
        padding: '2%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        alignContent: 'flex-end',
        backgroundColor: '#FFFFFF',
        border: '0',
        borderRadius: '100px',
    },

    mesageInput: {
        height: '80%',
        width: '90%',
        marginRight: '5%',
        flex: '1',
        border: '0',
        
    },

    btn_enviar: {
        height: '100%',
        width: '10%',
        backgroundColor: '#FF7F00',
        borderRadius: '100px',
        color: '#FFFFFF',
    },
   
  }));