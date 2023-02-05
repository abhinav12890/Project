import React from 'react';
import './navbar.scss';
// import Clogo from "/assets/PIClogo.png"
// import Plogo from "/assets/mii.jpg"
import HomeIcon from '@mui/icons-material/Home';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from "react-router-dom";
const Navbar = () => {
  let list = document.querySelectorAll('.list');
  function setActiveClass() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
  }
  list.forEach((item) =>
    item.addEventListener("mouseover", setActiveClass)
  )
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src="/assets/PIClogo.png" alt="Company Logo" />
        <img src="/assets/mii.jpg" alt="Partner Logo" />
      </div>
      <div className="navbar__right">
        <div className="navigation-icons">
          <div className="navigation-icon">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <HomeIcon />
            </Link>
            <p className="icon-name">Home</p>
          </div>
          <div className="navigation-icon">
            <Link to="/corporate" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <CorporateFareIcon />
            </Link>
            <p className="icon-name">Corporate</p>
          </div>
          <div className="navigation-icon">
            <Link to="/services" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <MiscellaneousServicesIcon />
            </Link>
            <p className="icon-name">Services</p>
          </div>
          <div className="navigation-icon">
            <Link to="/sales" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <LoyaltyIcon />
            </Link>
            <p className="icon-name">Sales</p>
          </div>
          <div className="navigation-icon">
            <Link to="/news" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <NewspaperIcon />
            </Link>
            <p className="icon-name">News&Events</p>
          </div>
          <div className="navigation-icon">
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              < ContactPageIcon />
            </Link>
            <p className="icon-name">Contact</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


