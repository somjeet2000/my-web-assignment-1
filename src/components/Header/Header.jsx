import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons';
import { faGear, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Image from './Image.jpg';

const Header = () => {
  return (
    <div>
      <nav
        className='navbar bg-dark border-bottom border-body rounded border border-dark navbar-expand-lg'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <FontAwesomeIcon
              icon={faReact}
              style={{
                width: '40px',
                height: '34px',
                margin: '0.25rem 2rem 0.25rem 0.25rem',
              }}
            />
          </a>

          <form className='d-flex align-items-center ms-0' role='search'>
            <div className='input-group'>
              <span className='input-group-text bg-dark border-0'>
                <FontAwesomeIcon icon={faSearch} className='Magnifying-glass' />
              </span>
              <input
                className='form-control bg-dark'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </div>
          </form>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <div className='d-flex gap-3 mx-2 p-2 ms-auto'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
              <FontAwesomeIcon className='icon' icon={faGear} />
              <div className='notification-icon'>
                <FontAwesomeIcon className='icon' icon={faBell} />
                <div className='notification-badge'></div>
              </div>
              {/* <FontAwesomeIcon className='icon' icon={faBell} /> */}
              <div className='icon-image'>
                <img src={Image} alt='Profile' />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
