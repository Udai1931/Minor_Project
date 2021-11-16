import React from 'react'
import Chart from "react-google-charts";

function DetailStock() {
    return (
        <div class="flex flex-col items-center justify-center h-screen px-40 mt-20 mb-20 ">
            <div class="text-center mb-20">
                <p class="mt-10 text-sm leading-7 text-gray-500 font-regular uppercase">
                    PREDICTION
                </p>
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                    Check  <span class="text-purple-600">Future</span>
                </h3>
            </div>
            <div className="flex justify-center items-center w-full h-3/6">
                <div className="flex justify-center items-center w-3/6 h-full text-center">
                    <Chart
                        width={'600px'}
                        height={'400px'}
                        chartType="LineChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['x', 'Actual', 'Predicted'],
                            [0, 0, 0],
                            [1, 10, 5],
                            [2, 23, 15],
                            [3, 17, 9],
                            [4, 18, 10],
                            [5, 9, 5],
                            [6, 11, 3],
                            [7, 27, 19],
                        ]}
                        options={{
                            hAxis: {
                                title: 'Date',
                            },
                            vAxis: {
                                title: 'Price',
                            },
                            series: {
                                1: { curveType: 'function' },
                            },
                        }}
                        rootProps={{ 'data-testid': '2' }}
                    />
                </div>
                <div className="flex flex-col justify-center items-start  w-3/6 h-full">
                    <h1 className="font-bold text-3xl m-4">Info from backend</h1>
                    <p className="px-4 py-4">Insights ka info from backend</p>
                    <ol className="m-10 mt-2">
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;Factor 1</li>
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;Factor 2</li>
                        <li className="m-4">➫&nbsp;&nbsp;&nbsp;Factor 3</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default DetailStock
