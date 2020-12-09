import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Chart(props){

    const classes = useStyles();
    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 10, pv: 220, amt: 1400}

      ];
        
    return (
        <div className={classes.root}>
                <LineChart width={600} height={300} data={data}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                </LineChart>
      </div>
    );
}

export default Chart;

const useStyles = makeStyles({

    root:{
        height: '100%',
        width: '100%',
        margin: "0 0 5% 0",
        padding: '0 5%',
    }

});