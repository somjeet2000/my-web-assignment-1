import React from 'react';
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
import Image from './Image.jpg';

const Dashboard = () => {
  const percentage = 70;
  return (
    <main className='container custom-container'>
      <div className='custom-grid'>
        <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
          <h4 className='pt-3 pb-2'>Dashboard</h4>
        </div>
        <div className='row'>
          <Summary
            title='Total Orders'
            description='75'
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
            description='70'
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
            description='05'
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
            description='$12k'
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
                    <div className='fs-2 fw-semibold pb-3'>$6759.25</div>
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
              <div className='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='card-title fw-medium'>Activity</div>
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
                  >
                    <option defaultValue value='Weekly' className='bg-dark'>
                      Weekly
                    </option>
                    <option value='Daily' className='bg-dark'>
                      Daily
                    </option>
                    <option value='Monthly' className='bg-dark'>
                      Monthly
                    </option>
                    <option value='Yearly' className='bg-dark'>
                      Yearly
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <ActivityChart />
              </div>
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
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Wade Warren
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#14591D',
                              color: '#E1E289',
                            }}
                          >
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Jane Cooper
                        </td>
                        <td>48965786</td>
                        <td>$365.02</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#14591D',
                              color: '#E1E289',
                            }}
                          >
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Guy Hawkins
                        </td>
                        <td>78958215</td>
                        <td>$45.88</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#A50104',
                              color: '#FFB4B4',
                            }}
                          >
                            Cancelled
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Kristin Watson
                        </td>
                        <td>20965732</td>
                        <td>$65.00</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#A50104',
                              color: '#FFB4B4',
                            }}
                          >
                            Pending
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Cody Fisher
                        </td>
                        <td>95715620</td>
                        <td>$545.00</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#14591D',
                              color: '#E1E289',
                            }}
                          >
                            Delivered
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className='d-flex align-items-center gap-2'
                          style={{ paddingLeft: '0' }}
                        >
                          <div className='icon-image-customer'>
                            <img src={Image} alt='Profile' />
                          </div>
                          Savannah Nguyen
                        </td>
                        <td>78514568</td>
                        <td>$128.20</td>
                        <td>
                          <span
                            className='badge rounded-pill fw-lighter pt-1 pb-1'
                            style={{
                              backgroundColor: '#14591D',
                              color: '#E1E289',
                            }}
                          >
                            Delivered
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6 col-md-4 mb-3'>
            <div className='card bg-dark h-100' style={{ color: '#fff' }}>
              <div className='card-body'>
                <div className='d-flex justify-content-between fw-medium pb-2'>
                  Customer's Feedback
                </div>
                <div>
                  <table className='table table-dark text-start'>
                    <tbody className='d-flex flex-column'>
                      <tr>
                        <td>
                          <div className='d-flex flex-row align-items-center gap-2 pb-2 fw-medium'>
                            <div className='icon-image-customer'>
                              <img src={Image} alt='Profile' />
                            </div>
                            Jenny Wilson
                          </div>
                          <div className='pb-1'>
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              style={{ paddingRight: '1px' }}
                            />
                          </div>
                          <div
                            className='lh-base'
                            style={{ fontSize: '0.7rem', color: '#d0c4c4' }}
                          >
                            The food was excellent and so was the service. I had
                            the mushroom risotto with scallops which was
                            awesome. I had a burger over greens (gluten-free)
                            which was also very good. They were very
                            conscientious about gluten allergies.
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className='d-flex flex-row align-items-center gap-2 pb-2 fw-medium'>
                            <div className='icon-image-customer'>
                              <img src={Image} alt='Profile' />
                            </div>
                            Dianne Russell
                          </div>
                          <div className='pb-1'>
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#F4E409'
                              style={{ paddingRight: '1px' }}
                            />
                            <FontAwesomeIcon
                              icon={faStar}
                              color='#FAE409'
                              style={{ paddingRight: '1px' }}
                            />
                          </div>
                          <div
                            className='lh-base'
                            style={{ fontSize: '0.7rem', color: '#d0c4c4' }}
                          >
                            We enjoyed the Eggs Benedict served on homemade
                            focaccia bread and hot coffee. I am happy with the
                            service.
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
