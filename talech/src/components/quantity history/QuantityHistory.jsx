import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function QuantityHistory(props){

    const options = {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Quantity history'
        },
        series: [
            {
                data: MakeChartPoints(props.quantityHistoryData)
            }
        ]
    };

    function MakeChartPoints() {
        let chartPoints = [];
        for (let i = 0; i < props.quantityHistoryData.length; i++)
            chartPoints[i] = [props.quantityHistoryData[i].time, props.quantityHistoryData[i].amount]
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

export default QuantityHistory;