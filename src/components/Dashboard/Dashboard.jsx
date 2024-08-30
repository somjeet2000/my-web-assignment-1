import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Summary from '../Summary';
import {
  faCartPlus,
  faCaretDown,
  faCaretUp,
  faBagShopping,
  faHandHoldingDollar,
  faBullseye,
  faBurger,
  faMugHot,
  faAngleRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ActivityChart from '../ActivityChart';
// import Image from './Image.jpg';
import Profile1 from './Profile1.jpeg';
import Profile2 from './Profile2.png';
import Profile3 from './Profile3.jpg';
import Profile4 from './Profile4.jpg';
import Profile5 from './Profile5.jpeg';
import Profile6 from './Profile6.jpeg';
import Profile7 from './Profile7.jpeg';
import Profile8 from './Profile8.jpeg';

const Dashboard = () => {
  const profileImages = [
    Profile1,
    Profile2,
    Profile3,
    Profile4,
    Profile5,
    Profile6,
    Profile7,
    Profile8,
  ];
  const host = 'https://dashboard-acceleration-server.onrender.com';
  // const host = 'http://localhost:5000';
  const APP_VERSION = 'v1';
  const goalOfOrders = 100;
  const [percentage, setPercentage] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [itemsDelivered, setItemsDelivered] = useState(0);
  const [itemsCancelled, setItemsCancelled] = useState(0);
  const [calculateRevenue, setCalculateRevenue] = useState(0);
  const [calculateNetProfit, setCalculateNetProfit] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentFeedback, setRecentFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to format the Revenue
  const formatRevenue = (value) => {
    if (value >= 1e6) {
      // Millions
      return `${(value / 1e6).toFixed(1)}M`;
    } else if (value >= 1e3) {
      // Thousands
      return `${(value / 1e3).toFixed(1)}k`;
    } else {
      // Less than a thousand, just return the value
      return value.toString();
    }
  };

  // Function to calculate the Order Details available in Database
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
    setTotalOrders(responseJSON.length);
    let deliveredCount = 0;
    let cancelledCount = 0;
    let calculateTotalRevenue = 0;
    let calculateNetProfit = 0;

    for (let i = 0; i < responseJSON.length; i++) {
      // Calculate the delivery count and cancelled count
      if (responseJSON[i].orderStatus === 'Delivered') {
        deliveredCount++;
      } else if (responseJSON[i].orderStatus === 'Cancelled') {
        cancelledCount++;
      }

      // Calculate the Total revenue and Net profit
      if (
        responseJSON[i].orderStatus === 'Delivered' ||
        responseJSON[i].orderStatus === 'Pending'
      ) {
        calculateTotalRevenue =
          calculateTotalRevenue + responseJSON[i].costOfOrder;
        calculateNetProfit = calculateNetProfit + responseJSON[i].netProfit;
      }
    }
    // Sort the array from the latest to oldest
    const findRecentOrders = responseJSON.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Set the states to view it in the user interface.
    setRecentOrders(findRecentOrders.slice(0, 6));
    setRecentFeedback(findRecentOrders.slice(0, findRecentOrders.length));
    setItemsDelivered(deliveredCount);
    setItemsCancelled(cancelledCount);
    setCalculateRevenue(formatRevenue(calculateTotalRevenue));
    setCalculateNetProfit(parseFloat(calculateNetProfit).toFixed(2));
    setPercentage(((deliveredCount / goalOfOrders) * 100).toFixed(0));
  };

  useEffect(() => {
    setInterval(() => {
      getAllOrderDetails();
    }, 10000);
  }, []);

  if (loading) {
    // return <div className='p-3'>Loading...</div>;
    return (
      <main className='container custom-container'>
        <div className='custom-grid'>
          <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
            <h4 className='pt-3 pb-2'>Dashboard Loading...</h4>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className='container custom-container'>
      <div className='custom-grid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
          <h4 className='pt-3 pb-2'>Dashboard</h4>
        </div>
        <div className='row'>
          <Summary
            title='Total Orders'
            description={totalOrders}
            mobile='6'
            mediumDevices='2'
            largeDevices='4'
            icon={faCartPlus}
            color='#058EFF'
            backgroundColor='#0e5187'
            caretIcon={faCaretUp}
            caretIconColor='#82B535'
          />
          <Summary
            title='Total Delivered'
            description={itemsDelivered}
            mobile='6'
            mediumDevices='2'
            largeDevices='4'
            icon={faBagShopping}
            color='#61DA87'
            backgroundColor='#3A5743'
            caretIcon={faCaretDown}
            caretIconColor='#D7263D'
          />
          <Summary
            title='Total Cancelled'
            description={itemsCancelled}
            mobile='6'
            mediumDevices='2'
            largeDevices='4'
            icon={faBagShopping}
            color='#E63E54'
            backgroundColor='#904D56'
            caretIcon={faCaretUp}
            caretIconColor='#82B535'
          />
          <Summary
            title='Total Revenue'
            description={calculateRevenue}
            mobile='6'
            mediumDevices='2'
            largeDevices='6'
            icon={faHandHoldingDollar}
            color='#E77AC5'
            backgroundColor='#715669'
            caretIcon={faCaretDown}
            caretIconColor='#D7263D'
          />
          <div className='col-12 col-md-4 col-lg-6 mb-3'>
            <div
              className='card bg-dark'
              style={{ color: '#fff', maxHeight: '200px' }}
            >
              <div className='card-body d-flex flex-row justify-content-between'>
                <div className='d-flex flex-column'>
                  <div
                    className='card-title text-start pb-1'
                    style={{ fontSize: '0.8rem' }}
                  >
                    Net Profit
                  </div>
                  <div className='card-text d-flex flex-column align-items-start'>
                    <div className='fs-2 fw-semibold pb-3'>
                      ${calculateNetProfit}
                    </div>
                    <div
                      className='fw-medium'
                      style={{ color: '#82B535', fontSize: '0.9rem' }}
                    >
                      <FontAwesomeIcon icon={faCaretUp} className='me-1' />
                      3%
                    </div>
                  </div>
                </div>
                <div className='mw-50 h-auto' style={{ width: '100px' }}>
                  <CircularProgressbarWithChildren
                    value={percentage}
                    strokeWidth={15}
                    styles={buildStyles({
                      pathColor: '#7371FC',
                      trailColor: '#3f2e56',
                    })}
                  >
                    <label
                      style={{
                        fontSize: '1.5rem',
                        padding: '3rem 1rem 2rem 1rem',
                      }}
                    >
                      {percentage}%
                      <p style={{ fontSize: '0.4rem' }}>Goal Completed</p>
                    </label>
                  </CircularProgressbarWithChildren>
                  <label className='p-1 mw-50' style={{ fontSize: '0.4rem' }}>
                    *The values here has been rounded off.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row custom-grid'>
          <div className='col-12 col-lg-6 col-md-8 mb-3 h-100'>
            <div className='card bg-dark' style={{ color: '#fff' }}>
              <ActivityChart />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-md-4 mb-3 h-100'>
            <div className='card bg-dark' style={{ color: '#fff' }}>
              <div className='card-body'>
                <div>
                  <div className='d-flex align-items-center'>
                    <div
                      className='m-2'
                      style={{
                        width: '55px',
                        height: '55px',
                        color: '#E63E54',
                        backgroundColor: '#904D56',
                        borderRadius: '100%',
                        paddingTop: '0.9rem',
                        fontSize: '1.2rem',
                      }}
                    >
                      <FontAwesomeIcon icon={faBullseye} />
                    </div>
                    <label className='p-2'>Goals</label>
                    <div className='ms-auto'>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{
                          height: '20px',
                          width: '20px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          padding: '0.3rem',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div
                      className='m-2'
                      style={{
                        width: '55px',
                        height: '55px',
                        color: '#058EFF',
                        backgroundColor: '#0e5187',
                        borderRadius: '100%',
                        paddingTop: '0.8rem',
                        fontSize: '1.2rem',
                      }}
                    >
                      <FontAwesomeIcon icon={faBurger} />
                    </div>
                    <label className='p-2'>Popular Dishes</label>
                    <div className='ms-auto'>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{
                          height: '20px',
                          width: '20px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          padding: '0.3rem',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <div
                      className='m-2'
                      style={{
                        width: '55px',
                        height: '55px',
                        color: '#2DC7FF',
                        backgroundColor: '#00688e',
                        borderRadius: '100%',
                        padding: '0.7rem 0 0 0.3rem',
                        fontSize: '1.2rem',
                      }}
                    >
                      <FontAwesomeIcon icon={faMugHot} />
                    </div>
                    <label className='p-2'>Menus</label>
                    <div className='ms-auto'>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        style={{
                          height: '20px',
                          width: '20px',
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          padding: '0.3rem',
                          borderRadius: '50%',
                          cursor: 'pointer',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row custom-grid h-100'>
          {recentOrders.length > 0 ? (
            <div className='col-12 col-lg-6 col-md-8 mb-3'>
              <div className='card bg-dark h-100' style={{ color: '#fff' }}>
                <div className='card-body'>
                  <div className='d-flex justify-content between align-items-center'>
                    <div className='card-title fw-medium'>Recent Orders</div>
                  </div>
                  <div className='d-flex fw-normal table-responsive'>
                    <table
                      className='table table-dark table-hover align-middle'
                      style={{
                        fontSize: '0.7rem',
                        textAlign: 'start',
                      }}
                    >
                      <thead>
                        <tr>
                          <th className='fw-semibold' scope='col'>
                            Customer
                          </th>
                          <th className='fw-semibold' scope='col'>
                            Order No.
                          </th>
                          <th className='fw-semibold' scope='col'>
                            Amount
                          </th>
                          <th className='fw-semibold' scope='col'>
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map((order, index) => (
                          <tr key={index}>
                            <td className='d-flex align-items-center gap-2'>
                              <div className='icon-image-customer'>
                                <img
                                  src={
                                    profileImages[index % profileImages.length]
                                  }
                                  alt='Profile'
                                />
                              </div>
                              <div>{order.userName}</div>
                            </td>
                            <td>{order.orderID}</td>
                            <td>${order.costOfOrder}</td>
                            <td>
                              <span
                                className='badge rounded-pill fw-lighter pt-1 pb-1'
                                style={{
                                  backgroundColor: `${
                                    order.orderStatus === 'Delivered'
                                      ? '#14591D'
                                      : order.orderStatus === 'Pending'
                                      ? '#5A5766'
                                      : '#A50104'
                                  }`,
                                  color: `${
                                    order.orderStatus === 'Delivered'
                                      ? '#E1E289'
                                      : order.orderStatus === 'Pending'
                                      ? '#EDFFEC'
                                      : '#FFB4B4'
                                  }`,
                                }}
                              >
                                {order.orderStatus}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='col-12 col-lg-6 col-md-8 mb-3'>
              <div className='card bg-dark h-100' style={{ color: '#fff' }}>
                <div className='card-body'>
                  <div className='d-flex justify-content between align-items-center'>
                    <div className='card-title fw-medium'>
                      Recent Orders Loading...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {recentFeedback.length > 0 ? (
            <div className='col-12 col-lg-6 col-md-4 mb-3'>
              <div className='card bg-dark h-100' style={{ color: '#fff' }}>
                <div className='card-body'>
                  <div className='d-flex justify-content-between fw-medium pb-2'>
                    Customer's Feedback
                  </div>
                  <div className='scrollable-container'>
                    <table className='table table-dark text-start'>
                      <tbody>
                        {recentFeedback.map((feedback, index) => (
                          <tr key={index}>
                            <td>
                              <div className='d-flex flex-row align-items-center gap-2 pb-2 fw-medium'>
                                <div className='icon-image-customer'>
                                  <img
                                    src={
                                      profileImages[
                                        index % profileImages.length
                                      ]
                                    }
                                    alt='Profile'
                                  />
                                </div>
                                {feedback.userName}
                              </div>
                              <div className='pb-1'>
                                {Array.from({ length: 5 }, (_, index) => (
                                  <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    color={
                                      index < feedback.rating ? '#F4E409' : ''
                                    } // Filled stars and unfilled stars
                                    style={{ paddingRight: '1px' }}
                                  />
                                ))}
                              </div>
                              <div
                                className='lh-base'
                                style={{ fontSize: '0.7rem', color: '#d0c4c4' }}
                              >
                                {feedback.feedback}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='col-12 col-lg-6 col-md-4 mb-3'>
              <div className='card bg-dark h-100' style={{ color: '#fff' }}>
                <div className='card-body'>
                  <div className='d-flex justify-content-between fw-medium pb-2'>
                    Customer's Feedback Loading...
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
