// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const data = {
    labels: [
      '5',
      '',
      '9',
      '',
      '11',
      '',
      '13',
      '',
      '15',
      '',
      '17',
      '',
      '19',
      '',
      '21',
      '',
      '23',
      '',
      '25',
      '',
      '27',
    ],
    datasets: [
      {
        data: [
          12000, 6000, 4000, 5000, 3000, 5500, 13000, 7000, 4500, 8000, 14000,
          12000, 6000, 6500, 5000, 8500, 7500, 15000, 7000, 8000, 9500,
        ],
        backgroundColor: ['#7371FC'],
        borderRadius: 10,
        borderSkipped: false, // Ensures all corners get the borderRadius
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 15000,
        ticks: {
          stepSize: 5000,
          callback: function (value) {
            if (value === 5000) return '5k   ';
            if (value === 10000) return '10k   ';
            if (value === 15000) return '15k   ';
            return '';
          },
          padding: 1,
        },
        grid: {
          drawBorder: false,
          color: function (context) {
            if (context.tick.value % 5 === 0) {
              return 'rgba(255, 255, 255, 0.2)'; // Thin lines at steps
            }
            return 'rgba(0, 0, 0, 0)'; // Transparent for all other lines
          },
          lineWidth: 0.5, // Thin lines
          offset: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false, // Hide x-axis grid lines
        },
        ticks: {
          autoSkip: false, // Ensure no auto-skipping of labels
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable the legend to remove the label text
      },
      tooltip: {
        enabled: false, // Disable the tooltip
      },
    },
  };

  return (
    <div className='p-3'>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
