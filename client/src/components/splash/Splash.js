import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Splash = () => {
  const [form, setForm] = useState(<LoginForm />);

  const changeForm = (component) => {
    setForm(component);
  };

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
        </div>
      </div>
    </div>
  );
}
 
export default Splash;