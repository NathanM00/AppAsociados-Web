import React, { useState, useEffect } from 'react';
import firebase from '../../utils/firebase';
import Noticia from '../Noticia/Noticia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from '@material-ui/core';

export default function SecNoticias(props) {
  const classes = useStyles();
  const [newsList, setNewsList] = useState([]);
  const [editableNews, setEditableNews] = useState([]);

    useEffect(() => {
      const newsRef = firebase.database().ref('Noticias');

      newsRef.on('value', (snapshot) => {
        const news = snapshot.val();
        const newsList = [];
        for (let id in news) {
          newsList.push({id, ...news[id] } );
        }
        setNewsList(newsList.reverse());
      });
    }, []);

    function handleEdit(editableNews){
      setEditableNews(editableNews);
      props.onEdit(editableNews);
    }

    return (
      <Card className={classes.root}>
        <CardContent>
          <p className={classes.title}>
            {props.title}
          </p>
          <div className={classes.news}>
              {newsList ? newsList.map((news,index) =>

              <Noticia onClick={handleEdit} className={classes.news} news={news} key={index}/> ) : ''}  
          </div>

             
        </CardContent>       
      </Card>
    );
  }

const useStyles = makeStyles({
  root: {
    display: 'flex',
    maxWidth: '100%',
    height: '500px',
    overflow: 'scroll',

  },

  title: {
    height: '20%',
    padding: '3% 5% 0 5%',
    margin: "0 0 2% 0",
    fontSize: '30px',
    fontWeight: 700,
    color: "#474747",
  },

  news: {
    width: '100%',
    height: '75%',
    display: 'box',
    justifyContent:'flex-start',
    alignItems:'center',
    overflow: 'scroll',
    flexDirection: 'row',
  },

});