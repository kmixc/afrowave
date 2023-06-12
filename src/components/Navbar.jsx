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
        <Link onClick={showNavbar} to='/pastfestivals' className='link'>PAST FESTIVALS</Link>
        <Link onClick={showNavbar} to='/contact' className='link'>CONTACT</Link>
        <div class="dropdown tickets">
          <button class="dropbtn">TICKETS
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href='#'>June 15th</a>
            <a href='#'>June 16th</a>
            <a href='#'>June 17th</a>
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
