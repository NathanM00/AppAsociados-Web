import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatListItem from '../../components/ChatListItem/ChatListItem';
import Button from '@material-ui/core/Button';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import MessageItem from '../../components/MessageItem/MessageItem';
import Login from '../Login/Login';

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let chatId =undefined;

const Soporte = () => {
    const classes = useStyles();

    const [activeChat, setActiveChat] = useState(undefined);
    const [user,setUser] = useState(null);
    const [listItems, setListItems] = useState([]);

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(response => {
            if (response){
                //leer datos de usuario
                firebase.database().ref(`/Soporte/${response.uid}`).once('value')
                .then(snapshot => {
                    setUser(snapshot.val());
                });
            }
        });

    }, [])

    const [chatList, setChatList] = useState([
        /*{chatId: 1, title: 'Juan'},
        {chatId: 2, title: 'Camila'},
        {chatId: 3, title: 'Juan'},
        {chatId: 4, title: 'Juan'},*/
    ]);

    const [id, setId] = useState ([]);
/*
    useEffect(()=>{
        const ref = firebase.database().ref('Chats');
        
        ref.on('value', (snapshot) => {
            const chat = snapshot.val();
            const list = [];
            for(let id in chat){
                list.push({id, ...chat[id]});
            }
            setChatList(list.reverse());
        });
       
    }, [])

    

    useEffect(()=>{
        const ref = firebase.database().ref('Chats');
        
        ref.on('value', (snapshot) => {
            const messages = snapshot.val();
            const chatItem = [];
            for(let id in messages){
                chatItem.push({id, ...messages[id]});
            }
            chatItem.pop();
            var ultimoMensajelist= chatItem[chatItem.length-1];
            console.log(ultimoMensajelist);
            setId(ultimoMensajelist);
            console.log(chatItem);

        });
       
    }, [])
*/
    useEffect(()=>{
        const ref = firebase.database().ref('Chats');
        
        ref.on('value', (snapshot) => {
            const messages = snapshot.val();
         
            const list = [];
            const chatItem = [];
            let listaDeMensajes = [];

            for(let id in messages){
                chatItem.push({id, ...messages[id]});
                list.push({id, ...messages[id]});

                if(chatId !== undefined && chatId=== id){
                    listaDeMensajes.push({...messages[id]})
                }
            }
        
            setChatList(list.reverse());
            chatItem.pop();
            var ultimoMensajelist= chatItem[chatItem.length-1];
            console.log(ultimoMensajelist);
            setId(ultimoMensajelist);
            console.log(chatItem);

            setListItems(listaDeMensajes)

        });
       
    }, [])

    const [data, setData] = useState ([])

    function handleClick (e) {
        setData(e);
    }


    if(user === null){
        return (<Login/>);
    }

    return(
        <div className={classes.container}>
            <section className={classes.sidebar}>
                <div className={classes.search}>
                    <input className={classes.searchInput} placeholder="Buscar un chat"></input>
                </div>
                <div className={classes.chatlist}>
                    {chatList ? chatList.map((data, key) =>
                        <ChatListItem
                            key={data.id}
                            data={data}
                            //active={activeChat.id === chatList[key].id}
                           // onClick={handleClick}
                           onClick={()=>{
                               setListItems([])
                               chatId = data.id;
                                setActiveChat(data)
                           }
                          
                           }
                        />
                    ) : ''}
                </div>
            </section>

            <section className={classes.chat}>
                {activeChat !== undefined && 
                    <ChatWindow
                    key={activeChat.id}
                    user={user}
                    id = {activeChat.id}
                    data = {activeChat}
                    list={listItems}
                 
                    
                />
                }
            </section>
        </div>
    );
    
};

export default Soporte;

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        padding: '2%',
        
    },

    sidebar: {
        height: '100%',
        width: '30%',
        display: 'flex',
        padding: '2%',
        flexDirection: 'column',
        backgroundColor: '#E3E3E3',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
    },

    search: {
        height: '5%',
        width: '100%',
        padding: '3%',
        marginBottom: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: '20px',
        border: '0',
    },

    searchInput: {
        flex: '1',
        backgroundColor: 'transparent',
        border: '0',
    },

    chatlist: {
        height: '100%',
        width: '100%',
        padding: '3%',
        display: 'flex',
        flexDirection: 'column',
    },

    chat: {
        height: '100%',
        width: '70%',
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
        padding: '2%',
    },

    msg: {
        height: '8%',
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