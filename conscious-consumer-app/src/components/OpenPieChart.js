import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js' // stupid import statement we needed :// https://stackoverflow.com/questions/70098392/react-chartjs-2-with-chartjs-3-error-arc-is-not-a-registered-element 
Chart.register(ArcElement);

const data = {
  labels: ['textile', 'transport', 'emissions'],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const options = {
  cutout: '80%', // Adjust the cutout percentage to control the size of the hole in the middle
  maintainAspectRatio: false,
  responsive: true,
  legend: {
    display: true,
    position: 'bottom',
  },
};

const OpenPieChart = () => {
  return (
    <div className="donut-chart-container">
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default OpenPieChart; 

