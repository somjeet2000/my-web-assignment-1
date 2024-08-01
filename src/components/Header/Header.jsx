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
        className="navbar bg-dark border-body rounded-top border-top border-dark navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand navbar-icon" href="/">
            <FontAwesomeIcon
              icon={faReact}
              style={{
                width: '40px',
                height: '34px',
                marginRight: '2rem',
                paddingLeft: '0.5rem',
              }}
            />
          </a>

          <form className="d-flex align-items-center mx-auto" role="search">
            <div className="input-group search-bar">
              <span className="input-group-text bg-dark border-0">
                <FontAwesomeIcon icon={faSearch} className="Magnifying-glass" />
              </span>
              <input
                className="form-control input-search bg-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className="d-flex ms-auto gap-3 p-2">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              <FontAwesomeIcon className="icon" icon={faGear} />
              <div className="notification-icon">
                <FontAwesomeIcon className="icon" icon={faBell} />
                <div className="notification-badge"></div>
              </div>
              <div className="icon-image">
                <img src={Image} alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
