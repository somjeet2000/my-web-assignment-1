// BarChart.js
import React, { useEffect, useState } from 'react';
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
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeFrame, setTimeFrame] = useState('Yearly'); // Default: Yearly
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to current month
  const host = 'https://dashboard-acceleration-server.onrender.com';
  // const host = 'http://localhost:5000';
  const APP_VERSION = 'v1';

  // Get the details of the order
  const getAllOrderDetails = async () => {
    const response = await fetch(
      `${host}/api/${APP_VERSION}/order/get_order_details`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const responseJSON = await response.json();
    setLoading(false);
    processData(responseJSON);
  };

  const processData = (data) => {
    let newChartData;

    if (timeFrame === 'Yearly') {
      const ordersByMonth = Array(12).fill(0);
      data.forEach((order) => {
        const orderDate = new Date(order.date);
        const month = orderDate.getMonth();
        ordersByMonth[month] += 1;
      });

      newChartData = {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            data: ordersByMonth,
            backgroundColor: ['#7371FC'],
            borderRadius: 10,
            borderSkipped: false,
            barThickness: 25,
          },
        ],
      };
    } else if (timeFrame === 'Monthly') {
      const daysInMonth = new Date(
        new Date().getFullYear(),
        selectedMonth + 1,
        0
      ).getDate();
      const ordersByDay = Array(daysInMonth).fill(0);

      data.forEach((order) => {
        const orderDate = new Date(order.date);
        if (orderDate.getMonth() === selectedMonth) {
          const day = orderDate.getDate();
          ordersByDay[day - 1] += 1;
        }
      });

      newChartData = {
        labels: Array.from({ length: daysInMonth }, (_, i) => i + 1),
        datasets: [
          {
            data: ordersByDay,
            backgroundColor: ['#7371FC'],
            borderRadius: 10,
            borderSkipped: false,
            barThickness: 20,
          },
        ],
      };
    }

    setChartData(newChartData);
  };

  useEffect(() => {
    getAllOrderDetails();
    const intervalId = setInterval(() => {
      getAllOrderDetails();
    }, 10000); // Fetch data every 10 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [timeFrame, selectedMonth]);

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value, 10));
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 2,
        },
        grid: {
          drawBorder: false,
          color: function (context) {
            if (context.tick.value % 2 === 0) {
              return 'rgba(255, 255, 255, 0.2)'; // Thin lines at steps
            }
            return 'rgba(0, 0, 0, 0)'; // Transparent for all other lines
          },
          lineWidth: 0.5, // Thin lines
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

  if (loading || !chartData) {
    return (
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='card-title fw-medium'>Activity Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className='card-body'>
      <div className='d-flex justify-content-between align-items-center'>
        <div className='card-title fw-medium'>Activity</div>
        <div className='d-flex gap-3'>
          <select
            className='p-1'
            style={{
              color: '#fff',
              backgroundColor: '#383840',
              maxWidth: '100px',
              height: '25px',
              borderRadius: '3rem',
              fontSize: '0.7rem',
              border: 'none',
            }}
            value={timeFrame}
            onChange={handleTimeFrameChange}
          >
            <option defaultValue value='Yearly' className='bg-dark'>
              Yearly
            </option>
            <option value='Monthly' className='bg-dark'>
              Monthly
            </option>
          </select>
          {timeFrame === 'Monthly' && (
            <select
              className='p-1'
              style={{
                color: '#fff',
                backgroundColor: '#383840',
                maxWidth: '100px',
                height: '25px',
                borderRadius: '3rem',
                fontSize: '0.7rem',
                border: 'none',
              }}
              onChange={handleMonthChange}
              value={selectedMonth}
            >
              <option value={0} className='bg-dark'>
                January
              </option>
              <option value={1} className='bg-dark'>
                February
              </option>
              <option value={2} className='bg-dark'>
                March
              </option>
              <option value={3} className='bg-dark'>
                April
              </option>
              <option value={4} className='bg-dark'>
                May
              </option>
              <option value={5} className='bg-dark'>
                June
              </option>
              <option value={6} className='bg-dark'>
                July
              </option>
              <option value={7} className='bg-dark'>
                August
              </option>
              <option value={8} className='bg-dark'>
                September
              </option>
              <option value={9} className='bg-dark'>
                October
              </option>
              <option value={10} className='bg-dark'>
                November
              </option>
              <option value={11} className='bg-dark'>
                December
              </option>
            </select>
          )}
        </div>
      </div>

      <div className='p-3'>
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
