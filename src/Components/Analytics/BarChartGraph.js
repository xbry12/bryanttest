import React, { PureComponent } from 'react'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

function BarChartGraph() {
    return (
        <div>
            <h1>BarChart</h1>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data=''
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey=''/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey='' fill='#540d6e'/>
                </BarChart>
            </ResponsiveContainer>
            <h1>under the bar chart</h1>
        </div>
    )
}

export default BarChartGraph
