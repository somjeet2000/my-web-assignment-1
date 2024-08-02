import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

function ActivityChart() {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');

    // If a chart instance already exists, destroy it before creating a new one
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['5', '9', '11', '13', '15', '17', '19', '21', '23', '25'],
        datasets: [
          {
            label: 'Activity',
            data: [5, 9, 11, 13, 15, 17, 19, 21, 23, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return <canvas ref={canvasRef} id='activityChart'></canvas>;
}

export default ActivityChart;
