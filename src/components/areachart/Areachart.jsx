import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Areachart = ({AreaData,AreaDatax}) => {
  return (
    <LineChart
        xAxis={[{ data: AreaDatax }]}
        series={[
            {
            data:AreaData ,
            area: true,
            },
        ]}
        width={500}
        height={290}
    /> 
  )
}

export default Areachart
