import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const User = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <img className={classes.img}/>
            <h1 className={classes.text}>Usuario</h1>
        </div>

    );

};

export default User;

const useStyles = makeStyles((theme) => ({
    container: {
        height: '10%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: '8%',
        paddingBottom: '8%',

    },

    img: {
        height: '100%',
        width: '30%',
    },

    text: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: '10%',
        color: '#787878',
        fontWeight: '700',
    },
   
  }));