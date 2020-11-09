import React, { useEffect, useState } from 'react';
import SecNoticias from '../../components/SecNoticias/SecNoticias';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import WhiteBox from '../../containers/WhiteBox/WhiteBox'

function Noticias(props) {

    const classes = useStyles();

    return (
        <div className={classes.grandContainer}>
            <Grid container spacing={2} wrap={"wrap"} alignItems={"flex-start"} justify={"flex-start"} className={classes.container}>
                <Grid item xs={12}  className={classes.box}>
                     <SecNoticias title={"Noticias recientes"} ></SecNoticias>
                </Grid>
                <Grid item xs={12}  className={classes.box}>
                        <WhiteBox title={"Nuevo noticia"} hasDesc={false}
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
      overflow: 'auto',
    },
    container: {
        height: 'auto',
      },
    box: {
        height: 'auto',
    },
  }));
  