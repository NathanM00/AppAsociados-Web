import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import {XYPlot, VerticalBarSeries} from 'react-vis';

function Chart(props){

    const classes = useStyles();
    const data = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
      ];
        
    return (
        <div className={classes.root}>
          <XYPlot height={200} width={200}>
            <VerticalBarSeries  data={data} />
         </XYPlot>
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