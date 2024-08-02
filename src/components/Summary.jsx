import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Summary = (props) => {
  const {
    title,
    description,
    mobile,
    mediumDevices,
    largeDevices,
    icon,
    color,
    backgroundColor,
    caretIcon,
    caretIconColor,
  } = props;
  return (
    <div
      className={`col-${mobile} col-md-${mediumDevices} col-lg-${largeDevices} mb-3`}
    >
      <div
        className='card bg-dark'
        style={{ color: '#fff', maxHeight: '200px' }}
      >
        <div className='card-body'>
          <div className='d-flex justify-content-start align-items-center pb-2'>
            <FontAwesomeIcon
              icon={icon}
              style={{
                position: 'relative',
                color: `${color}`,
                fontSize: '1.2rem',
                padding: '0.8rem',
                backgroundColor: `${backgroundColor}`,
                borderRadius: '0.6rem',
                height: '25px',
                width: '25px',
              }}
            />
          </div>
          <div className='d-flex flex-column'>
            <div
              className='card-title text-start'
              style={{ fontSize: '0.8rem' }}
            >
              {title}
            </div>
            <div className='card-text d-flex justify-content-between align-items-center'>
              <div className='fs-3 fw-semibold'>{description}</div>
              <div
                className='fw-medium'
                style={{ color: `${caretIconColor}`, fontSize: '0.9rem' }}
              >
                <FontAwesomeIcon icon={caretIcon} className='mx-2' />
                3%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
