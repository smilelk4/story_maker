import React from 'react';

const LoginForm = () => {
  return ( 
    <form method="post" action="/my-hub">
      <h4>Login</h4>
      <p>
        <label for="name" />
        <input type="text" name="name" />
      </p>
      <p>
        <label for="password" />
        <input type="password" name="password" />
      </p>
      <input type='submit' value="Submit" />
    </form>
  );
}
 
export default LoginForm;