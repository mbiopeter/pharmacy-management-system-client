import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const Barchart = ({barData,barX}) => {
  return (
    <BarChart
        series={barData}
        height={250}
        xAxis={[{ data: barX, scaleType: 'band' }]}
        margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    /> 
  )
}

export default Barchart
