import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function PriceHistory(props) {

    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Price history'
        },
        series: [
            {
                data: MakeChartPoints(props.priceHistoryData)
            }
        ]
    };

    function MakeChartPoints() {
        let chartPoints = [];
        for (let i = 0; i < props.priceHistoryData.length; i++)
            chartPoints[i] = [props.priceHistoryData[i].time, props.priceHistoryData[i].price]
        return chartPoints;
    }

    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </>
    );
}

export default PriceHistory;