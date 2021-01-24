import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import SwordAndShield from './svg/SwordAndShield';
import InputField from './InputField';
import bodymovin from 'lottie-web';
import hamburgerAnimation from '../animation/navHamburger';

const NavBar = ({handleLogout, stories, user: { username, profileImage}, 
                handlePasswordChange, handleProfImageChange }) => {
  const hamburgerContainer = useRef();
  const popUpContainer = useRef();
  const storiesContainer = useRef();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChangePasswordMode, setIsChangePasswordMode] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const updateProfileImage = e => {
    handleProfImageChange(e.target.files[0]);
  }
  
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

  const handleChangePassword = e => {
    e.preventDefault();
    handlePasswordChange(newPassword, confirmNewPassword);
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
              onClick={() => setIsPopupOpen(!isPopupOpen)}>
          </div>
          <div ref={popUpContainer} 
               onMouseLeave={hidePopup}
               className="navbar__popup">
            <div className="navbar__popup-top">
              <div className="navbar__profile-image">
                <img src={profileImage} alt={username} />
                <input
                  type="file"
                  id="profile-image"
                  inputId="profile-image"
                  name="profile-image"
                  accept="image/*"
                  className="hide"
                  onChange={updateProfileImage} />
                <label htmlFor="profile-image">
                  <PhotoCameraIcon/>
                </label>
              </div>
              <p>{username}</p>
            </div>
            <div className="navbar__popup-bottom">
              <div className="navbar__stories-container">
                <div className="navbar__stories"
                  onMouseOver={displayStories}
                  onMouseLeave={hideStories}>
                  <p>View Stories</p>
                  <div className="navbar__sub-popup"
                      ref={storiesContainer}>
                    {stories && stories.map(story => (
                      <NavLink to={`/stories/${story.id}`} key={story.id}>{story.title}</NavLink>
                    ))}
                  </div>
                </div>
              </div>
              {isChangePasswordMode ? (
                <form className="navbar__form"
                      onSubmit={handleChangePassword}
                      onMouseLeave={() => setIsChangePasswordMode(false)}>
                  <InputField
                      type="password"
                      placeholder="Password"
                      currentState={newPassword}
                      updateState={setNewPassword}
                  />
                  <InputField
                      type="password"
                      placeholder="Confirm Password"
                      currentState={confirmNewPassword}
                      updateState={setConfirmNewPassword}
                  />
                  <button type="submit">Save Change</button>
                </form>
              ) : (
                <p onClick={() => setIsChangePasswordMode(true)}>
                  Change Password
                </p>
              )}
              <p className="navbar__logout" onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;