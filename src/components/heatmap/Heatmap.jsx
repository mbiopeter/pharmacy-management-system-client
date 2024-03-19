import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Heatmap = () => {
  const generateData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const salesData = [];

    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(currentYear, month + 1, 0).getDate(); // Get the number of days in the month
      const monthlySales = [];
      for (let day = 0; day < daysInMonth; day++) {
        monthlySales.push({
          x: day + 1, // Day of the month
          y: Math.floor(Math.random() * 100) // Random sales data
        });
      }
      salesData.push({
        name: getMonthName(month),
        data: monthlySales
      });
    }

    return salesData;
  };

  const getMonthName = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
  };

  const [state] = useState({
    series: generateData(),
    options: {
      chart: {
        height: 350,
        type: 'heatmap',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#0BDA51"],
      title: {
        text: 'Sales Timing: 2023'
      },
      xaxis: {
        type: 'category',
        categories: [...Array(31).keys()].map(day => day + 1) // Generating days of the month dynamically
      },
      yaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

      }
    },
  });

  return (
    <ReactApexChart options={state.options} series={state.series} type="heatmap" height={290} />
  );
}

export default Heatmap;
