import React from 'react';
import './Dashboard.css';
import Summary from '../Summary';
import {
  faCartPlus,
  faCaretDown,
  faCaretUp,
  faBagShopping,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const percentage = 70;
  return (
    <main className='container-fluid'>
      <div className='row'>
        {/* Sidebar */}
        <div>
          <div className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center'>
            <h4 className='pt-3 pb-2'>Dashboard</h4>
          </div>
          <div className='row'>
            <Summary
              title='Total Orders'
              description='75'
              mobile='6'
              mediumDevices='2'
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
              icon={faHandHoldingDollar}
              color='#E77AC5'
              backgroundColor='#715669'
              caretIcon={faCaretDown}
              caretIconColor='#D7263D'
            />
            <div className='col-12 col-md-4 mb-3'>
              <div class='card bg-dark' style={{ color: '#fff' }}>
                <div className='card-body d-flex flex-row justify-content-between'>
                  <div class='d-flex flex-column'>
                    <div
                      class='card-title text-start pb-2'
                      style={{ fontSize: '0.8rem' }}
                    >
                      Net Profit
                    </div>
                    <div className='card-text d-flex flex-column align-items-start'>
                      <div className='fs-2 fw-semibold p-2'>$6759.25</div>
                      <div
                        className='fw-medium'
                        style={{ color: '#82B535', fontSize: '0.9rem' }}
                      >
                        <FontAwesomeIcon icon={faCaretUp} className='me-2' />
                        3%
                      </div>
                    </div>
                  </div>
                  <div className='mw-50 h-auto' style={{ width: '127px' }}>
                    <CircularProgressbarWithChildren
                      value={percentage}
                      // text={`${percentage}% Goal Completed`}
                      strokeWidth={15}
                      styles={buildStyles({
                        // textColor: 'white',
                        // textSize: '0.4rem',
                        pathColor: 'turquoise',
                        trailColor: 'gold',
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
            {/* <Summary
              title='Net Profit'
              description='$6759.25'
              mobile='12'
              mediumDevices='4'
            />
            <Summary
              title='Activity'
              description='chart'
              mobile='12'
              mediumDevices='8'
            />
            <Summary
              title='Activity'
              description='chart'
              mobile='12'
              mediumDevices='4'
            />
            <Summary
              title='Activity'
              description='chart'
              mobile='12'
              mediumDevices='8'
            />
            <Summary
              title='Activity'
              description='chart'
              mobile='12'
              mediumDevices='4'
            /> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
