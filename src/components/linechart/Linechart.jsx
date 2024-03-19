import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Linechart = ({lineX,lineData}) => {
  return (
    <LineChart
        xAxis={lineX}
        series={lineData}
        width={600}
        height={290}
    />
  )
}

export default Linechart
