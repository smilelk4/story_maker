import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { clearErrors } from '../../store/reducers/errorReducer';

const Splash = () => {
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
    <div className="splash">
      <main className="splash__main">
        <section className="splash__section">
          <h1 className="splash__title title">Story Maker</h1>
        </section>
        <section className="splash__description">
          <p>Create your own story.</p>
          <p>Build habits.</p>
          <p>Achieve your goals.</p>
        </section>
        <footer className="splash__footer">
          Developed by Yuka Moribe
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
    </div>
  );
}
 
export default Splash;