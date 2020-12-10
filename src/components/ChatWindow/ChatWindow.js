import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MessageItem from '../../components/MessageItem/MessageItem';
import './ChatWindow.css';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import { Portal } from '@material-ui/core';


const ChatWindow = (props)=>{
    const classes = useStyles();

    const [text, setText] = useState('');

    const body = useRef();

    const [info, setInfo] = useState ([]);


    const [namePerfil, setNamePerfil] = useState("")

    useEffect(() => {

        console.log("ffff",props.data)
        console.log("LISTA",props.list)


        let mensajes = undefined;

        if(props.list.length > 0){
            
            mensajes = Object.values(props.list[0]);
        }else{
            mensajes = Object.values(props.data)
        }

        console.log(mensajes)
     
        let name = "";

        let allMensajes = [];
        mensajes.forEach((element, index) => {
           
            if(props.id == element){

            }else{
                if(name === ""){
                    name= element.nombre;
                    setNamePerfil(name)
                }
                allMensajes.push(element);
            }

        });

        setInfo(allMensajes);

        /*
        const refItem = firebase.database().ref('Chats/'+props.id);

        refItem.on('value', (snapshot) => {
            const messages = snapshot.val();
            const info = [];
            for(let id in messages){
                info.push({id, ...messages[id]});
            }
            setInfo(info);
            console.log(info);

        });

        */

    },[props.list]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    }, [info])

    function handleEnviar(){

        if(text !== ""){
            let envia = info[0].recibe;
            let recibe = info[0].envia;
            let nombre = info[0].nombre;
    
            console.log()
    
            let date = new Date();
            let newMensaje = {
                envia,
                hora : date.getHours().toString() + ":" + date.getMinutes().toString(),
                mensaje : text,
                nombre,
                recibe,
                visto : "si"
              }
    
              setText("")
    
             const refItem = firebase.database().ref('Chats/'+props.id).push(newMensaje);
        }
       
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
            <h1 className={classes.userName}>{namePerfil}</h1>
                </div>

                <div className={classes.container_chat}>
                    <div ref={body} className="msgList">
                        {info ? info.map((data, key) =>
                            <MessageItem
                                key={key}
                                user={props.data.id}
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
                            <Button className={classes.btn_enviar} onClick={handleEnviar}>Enviar</Button>
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
        height: '15%',
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