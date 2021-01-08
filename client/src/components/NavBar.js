import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SwordAndShield from './svg/SwordAndShield';
import bodymovin from 'lottie-web';
import hamburgerAnimation from '../animation/navHamburger';

const NavBar = ({handleLogout, stories,
                 user: { username, profileImage }}) => {
  const hamburgerContainer = useRef();
  const popUpContainer = useRef();
  const storiesContainer = useRef();
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

  const displayStories = () => {
    storiesContainer.current.classList.add('active');
  };

  const hideStories = () => {
    storiesContainer.current.classList.remove('active');
  };

  const hidePopup = () => {
    popUpContainer.current.classList.remove('active');
    setIsPopupOpen(false);
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
        <NavLink to='/my-hub'>
          <SwordAndShield />
        </NavLink>
        <div className="navbar__menu-container">
          <div className="navbar__hamburger"
              ref={hamburgerContainer}
              onMouseOver={() => setIsPopupOpen(!isPopupOpen)}>
          </div>
          <div ref={popUpContainer} 
               onMouseLeave={hidePopup}
               className="navbar__popup">
            <div className="navbar__popup-top">
              <div className="navbar__profile-image">
                <img src={profileImage} alt={username} />
              </div>
              <p>{username}</p>
            </div>
            <div className="navbar__stories-container">
              <div className="navbar__stories"
                 onMouseOver={displayStories}
                 onMouseLeave={hideStories}>
                View Stories
                <div className="navbar__sub-popup"
                     ref={storiesContainer}>
                  {stories && stories.map(story => (
                    <NavLink to={`/stories/${story.id}`} key={story.id}>{story.title}</NavLink>
                  ))}
                </div>
              </div>
            </div>
            <p className="navbar__logout" 
               onClick={handleLogout}>Logout</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;