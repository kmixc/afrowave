import React, { useRef } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (
    <header>
      <nav ref={navRef}>
        <Link onClick={showNavbar} to='/' className='link'>HOME</Link>
        <Link onClick={showNavbar} to='/lineup' className='link'>LINEUP</Link>
        <Link onClick={showNavbar} to='/info' className='link'>INFO</Link>
        <div class="dropdown past_festivals">
          <button class="dropbtn">PAST FESTIVALS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <Link onClick={showNavbar} to="pastfestivals2021">2021</Link>
            <Link onClick={showNavbar} to="pastfestivals2022">2022</Link>
          </div>
        </div>
        <Link onClick={showNavbar} to='/contact' className='link'>CONTACT</Link>
        <div class="dropdown tickets">
          <button class="dropbtn">TICKETS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href='https://www.eventbrite.com/e/afrowaveto-showcase-part-1-tickets-645943663887?aff=oddtdtcreator' target='tickets'>June 15th</a>
            <a href='https://www.eventbrite.com/e/afrowaveto-showcase-part-2-tickets-645940063117?aff=oddtdtcreator' target='tickets'>June 16th</a>
            <a href='https://www.ticketmaster.ca/afrowaveto-presents-blessd-toronto-ontario-06-17-2023/event/10005E7F0FC746BD' target='tickets'>June 17th</a>
          </div>
        </div>
        <button className='nav-btn' onClick={showNavbar}>
          <FontAwesomeIcon className='Xmark' icon={faXmark} size='2x' color='#fff' />
        </button>
      </nav>
      <button className='nav-btn open' onClick={showNavbar}>
        <FontAwesomeIcon icon={faBars} size='3x' color='#fff' />
      </button>
    </header>
  )
}
