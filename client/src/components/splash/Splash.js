import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GitHubIcon from '@material-ui/icons/GitHub';
import LoginForm from './LoginForm';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SignupForm from './SignupForm';
import AnimatedSection from './AnimatedSection';
import { clearErrors } from '../../store/reducers/errorReducer';

const Splash = ({...props}) => {
  const [form, setForm] = useState(<LoginForm />);
  const errors = useSelector(state => state.errors);
  const [displayErrors, setDisplayErrors] = useState([]);
  const dispatch = useDispatch();

  const changeForm = (component) => {
    setForm(component);
    dispatch(clearErrors());
  };

  useEffect(() => {
    setDisplayErrors(errors);
  }, [errors, dispatch]);

  return ( 
    <div className="splash"
                initial="out"
                animate="in"
                exit="out"
                variants={props}>
      <main className="splash__main">
        <section>
          <h1 className="splash__title title">Story Maker</h1>
        </section>
        <section
          className="splash__description">
          <AnimatedSection>
            <p>Create your own story.</p>
            <p>Build habits.</p>
            <p>Achieve your goals.</p>
          </AnimatedSection>
          <AnimatedSection>
            Story Maker is a gamified habit and goal tracker that helps individuals 
            keep track of their daily routines with the heroes they own.
          </AnimatedSection>
        </section>
        <footer className="splash__footer">
        <div className="footer__developed-by">
          <p className="footer__name">Developed & Designed by Yuka Moribe</p>
          <div className="footer__icon-container">
              <a target="_blank" rel="noreferrer" href="https://github.com/smilelk4">
                <GitHubIcon />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/yuka-moribe-485962157/">
                <LinkedInIcon />
              </a>
          </div>
        </div>
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
              <div key={error.message}>{error}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Splash;