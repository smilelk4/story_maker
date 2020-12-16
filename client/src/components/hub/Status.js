import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import bodymovin from 'lottie-web';

const StatusContainer = ({status}) => {
  let [lastActionCount, setLastActionCount] = useState(status[1]);

  useEffect(() => {
    if (lastActionCount !== 10) {
      const plusOneAnimation = bodymovin.loadAnimation({
        wrapper: document.querySelector('.status__svg-container'),
        animType: 'svg',
        loop: false,
        path: '/svg/plus-one.json',
      });
    
      plusOneAnimation.addEventListener('complete', function(){
        plusOneAnimation.destroy()
      });
    }
    setLastActionCount(status[1]);
  }, [status[1]]);

  return (
    <div className="status__field">
      <p>{status[0]}</p>
      <div className="status__action">
        <div className="status__svg-container"></div>
        {status[1] === 10 && <p className='alert'>{status[1]} actions</p>}
        {status[1] === 0 && <p>{status[1]} action</p>}
        {status[1] !== 0 && status[1] !== 10 && <p>{status[1]} actions</p>}
      </div>
      </div>
  )
}
 
export default StatusContainer;