import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faChartBar,
  faClipboardCheck,
  faWallet,
  faBagShopping,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="bg-dark rounded-bottom sidebar d-flex flex-column gap-4">
      <Link
        to="/"
        className={activeItem === 'home' ? 'active' : ''}
        onClick={() => handleItemClick('home')}
      >
        <FontAwesomeIcon icon={faHouse} />
      </Link>
      <Link
        to="/"
        className={activeItem === 'chart' ? 'active' : ''}
        onClick={() => handleItemClick('chart')}
      >
        <FontAwesomeIcon icon={faChartBar} />
      </Link>
      <Link
        to="/"
        className={activeItem === 'checklist' ? 'active' : ''}
        onClick={() => handleItemClick('checklist')}
      >
        <FontAwesomeIcon icon={faClipboardCheck} />
      </Link>
      <Link
        to="/"
        className={activeItem === 'wallet' ? 'active' : ''}
        onClick={() => handleItemClick('wallet')}
      >
        <FontAwesomeIcon icon={faWallet} />
      </Link>
      <Link
        to="/"
        className={activeItem === 'shopping' ? 'active' : ''}
        onClick={() => handleItemClick('shopping')}
      >
        <FontAwesomeIcon icon={faBagShopping} />
      </Link>
      <div className="flex-grow-1"></div> {/* Spacer */}
      <Link
        to="/"
        className={activeItem === 'logout' ? 'active' : ''}
        onClick={() => handleItemClick('logout')}
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </Link>
    </div>
  );
};

export default Sidebar;
