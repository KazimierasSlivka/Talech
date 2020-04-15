import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function PriceHistory(props){

    const options = {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Price history'
        },
        series: [
          {
            data: 
            [
                //[props.priceHistoryData[0].time, props.priceHistoryData[0].price],
                //[props.priceHistoryData[1].time,props.priceHistoryData[1].price],
                [2,5], 
            ]
          }
        ]
      };

    return(
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    );
}

export default PriceHistory;