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
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ActivityChart from '../ActivityChart';

const Dashboard = () => {
  const percentage = 70;
  return (
    <main className='container'>
      <div className='row custom-grid'>
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
              class='card bg-dark'
              style={{ color: '#fff', maxHeight: '200px' }}
            >
              <div className='card-body d-flex flex-row justify-content-between'>
                <div class='d-flex flex-column'>
                  <div
                    class='card-title text-start pb-2'
                    style={{ fontSize: '0.8rem' }}
                  >
                    Net Profit
                  </div>
                  <div className='card-text d-flex flex-column align-items-start'>
                    <div className='fs-2 fw-semibold pb-3'>$6759.25</div>
                    <div
                      className='fw-medium p-1'
                      style={{ color: '#82B535', fontSize: '0.9rem' }}
                    >
                      <FontAwesomeIcon icon={faCaretUp} className='me-2' />
                      3%
                    </div>
                  </div>
                </div>
                <div className='mw-50 h-auto' style={{ width: '121px' }}>
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
                      <p style={{ fontSize: '0.5rem' }}>Goal Completed</p>
                    </label>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div class='col-12 col-md-8 mb-3'>
            <div class='card bg-dark' style={{ color: '#fff' }}>
              <div class='card-body'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='card-title'>Activity</div>
                  <select
                    className='p-1'
                    style={{
                      color: '#fff',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      maxWidth: '100px',
                      height: '25px',
                      borderRadius: '3rem',
                      fontSize: '0.7rem',
                      border: 'none',
                    }}
                  >
                    <option selected value='Weekly' className='bg-dark'>
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
          <div class='col-12 col-md-4 mb-3'>
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
      </div>
    </main>
  );
};

export default Dashboard;
