import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import bodymovin from 'lottie-web';
import hamburgerAnimation from '../animation/navHamburger';

const NavBar = ({handleLogout, username, profileImage}) => {
  const hamburgerContainer = useRef();
  const popUpContainer = useRef();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const initiateHamburger = () => {
    bodymovin.loadAnimation({
      wrapper: hamburgerContainer.current,
      animType: 'svg',
      loop: false,
      path: '/svg/nav-hamburger.json',
      name: 'hamburger'
    });
    bodymovin.goToAndStop(.01, false , 'hamburger');
  }

  const animateHamburger = () => {
    hamburgerAnimation(hamburgerContainer.current);
  };

  useEffect(() => {
    initiateHamburger();
  });

  useEffect(() => {
    if (isPopupOpen) {
      animateHamburger();
      popUpContainer.current.classList.add('active');
    } else {
      initiateHamburger();
      popUpContainer.current.classList.remove('active');
    }
  }, [isPopupOpen]);

  return ( 
    <nav className="navbar">
      <div className="navbar__logo title">
        <NavLink to='/'>Story Maker</NavLink>
      </div>
      <div className="navbar__menu">
        <NavLink to='/my-hub'>Hub</NavLink>
        <p onClick={handleLogout}>Logout</p>
        <div className="navbar__menu-container">
          <div className="navbar__hamburger"
              ref={hamburgerContainer}
              onClick={() => setIsPopupOpen(!isPopupOpen)}>
          </div>
          <div ref={popUpContainer} className="navbar__popup"></div>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;