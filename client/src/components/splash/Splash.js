import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, useViewportScroll, useTransform, 
         useMotionValue } from 'framer-motion';
import GitHubIcon from '@material-ui/icons/GitHub';import LoginForm from './LoginForm';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SignupForm from './SignupForm';
import { clearErrors } from '../../store/reducers/errorReducer';

const Splash = ({...props}) => {
  const [form, setForm] = useState(<LoginForm />);
  const errors = useSelector(state => state.errors);
  const [displayErrors, setDisplayErrors] = useState([]);
  const dispatch = useDispatch();
  const descriptionContainer = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }});

    if (descriptionContainer.current) {
      observer.observe(descriptionContainer.current);
    }
  
    return () => observer.disconnect();
  }, []);


  const changeForm = (component) => {
    setForm(component);
    dispatch(clearErrors());
  };

  useEffect(() => {
    setDisplayErrors(errors);
  }, [errors, dispatch]);

  return ( 
    <motion.div className="splash"
                initial="out"
                animate="in"
                exit="out"
                variants={props}>
      <main className="splash__main">
        <section className="splash__section">
          <h1 className="splash__title title">Story Maker</h1>
        </section>
        <section
          ref={descriptionContainer} 
          className="splash__description">
          <motion.p
            animate={{ x: isVisible ? 0 : -100,
                      opacity: isVisible ? 1 : 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: .2 }}
          >Create your own story.</motion.p>
          <motion.p
            animate={{ x: isVisible ? 0 : -100,
                      opacity: isVisible ? 1 : 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: .4 }}
          >Build habits.</motion.p>
          <motion.p
            animate={{ x: isVisible ? 0 : -100,
                      opacity: isVisible ? 1 : 0 }}
            transition={{ ease: "easeOut", duration: 1, delay: .6 }}
          >Achieve your goals.</motion.p>
        </section>
        <footer className="splash__footer">
          <div>
              <a target="_blank" href="https://github.com/smilelk4">
                <GitHubIcon />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/yuka-moribe-485962157/">
                <LinkedInIcon />
              </a>
          </div>
          <p>Developed by Yuka Moribe</p>
        </footer>
      </main>
      <div className="splash__container">
        <div className="splash__scroll">
          <p className="splash__toggle-tag">
            <span onClick={() => changeForm(<SignupForm />)}>Sign Up</span>
            <span onClick={() => changeForm(<LoginForm />)}>Log In</span>
          </p>
          {form}
          <div className="splash__error-container">
            {displayErrors.map(error => (
              <div>{error}</div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
 
export default Splash;