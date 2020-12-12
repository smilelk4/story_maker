import React, { useEffect, useState } from 'react';

const Greeting = ({username}) => {
  const time = new Date().getHours();
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
      if (time < 12) {
        setGreeting('Good morning');
      } else if (time < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
  }, [username, time]);

  return ( 
    <><span>{greeting}, {username}</span></>
  );
}
 
export default Greeting;