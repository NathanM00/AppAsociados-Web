import React, { useEffect, useState } from 'react';
import SecNoticias from '../../components/SecNoticias/SecNoticias';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'
import UpBar from '../../containers/UpBar/UpBar'

function Noticias(props) {

    const classes = useStyles();
    const [editableNews, setEditableNews] = useState([]);

    function handleEdit(editableNews){
        setEditableNews(editableNews);
      }  

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                
            <Grid item xs={12}  className={classes.box}>
                <UpBar></UpBar>
            </Grid>

                <Grid item xs={12}  className={classes.box}>
                     <SecNoticias onEdit={handleEdit} title={"Noticias recientes"} ></SecNoticias>
                </Grid>
                <Grid item xs={12}  className={classes.box}>
                        <WhiteBox edit={editableNews} title={"Nuevo noticia"} hasDesc={false}
                         hasImage={false} hasForm={true} form={"noFull"} ></WhiteBox>
                </Grid>
            </Grid>

        </div>
    )
}

export default Noticias;

const useStyles = makeStyles((theme) => ({
    grandContainer: {
      padding: "2%",
      overflow: 'visible',
    },
    container: {
        height: 'auto',
      },
    box: {
        height: 'auto',
    },
  }));
  