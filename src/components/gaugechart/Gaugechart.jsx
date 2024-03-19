import React from 'react'
import GaugeChart from "react-gauge-chart";

const Gaugechart = ({Gauge}) => {
  return (
    <GaugeChart
        id="gauge-chart3"
        nrOfLevels={5}
        colors={["green", "orange", "red"]}
        arcWidth={0.3}
        percent={Gauge}
        textColor={'black'}
        hideText={true} 
    />
  )
}

export default Gaugechart
