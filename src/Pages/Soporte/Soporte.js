import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChatListItem from '../../components/ChatListItem/ChatListItem';
import Button from '@material-ui/core/Button';
import ChatWindow from '../../components/ChatWindow/ChatWindow';
import MessageItem from '../../components/MessageItem/MessageItem';

const Soporte = () => {
    const classes = useStyles();

    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Juan'},
        {chatId: 2, title: 'Camila'},
        {chatId: 3, title: 'Juan'},
        {chatId: 4, title: 'Juan'},
    ]);

    const [activeChat, setActiveChat] = useState({});

    const [user,setUser] = useState({
        id: 1234,
        name: 'Pepe',
    });

    return(
        <div className={classes.container}>
            <section className={classes.sidebar}>
                <div className={classes.search}>
                    <input className={classes.searchInput} placeholder="Buscar un chat"></input>
                </div>
                <div className={classes.chatlist}>
                    {chatList.map((item, key)=>(
                        <ChatListItem
                            key={key}
                            data={item}
                            active={activeChat.chatId === chatList[key].chatId}
                            onClick={()=>setActiveChat(chatList[key])}
                        />
                    ))}
                </div>
            </section>

            <section className={classes.chat}>
                {activeChat.chatId !== undefined &&
                    <ChatWindow
                        user={user}
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
        backgroundColor: '#FFFFFF',
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