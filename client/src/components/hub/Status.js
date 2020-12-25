import React, { useEffect, useState, useRef } from 'react';
import plusOneAnimation from '../../animation/plusOne';

const StatusContainer = ({status}) => {
  const svgContainer = useRef();
  let [lastActionCount, setLastActionCount] = useState(status[1]);

  useEffect(() => {
    if (status[1] && lastActionCount && status[1] !== lastActionCount) {
      plusOneAnimation(svgContainer.current);
    }
  }, [status[1]]);

  return (
    <div className="status__field">
      <p>{status[0]}</p>
      <div className="status__action">
        <div ref={svgContainer} className="status__svg-container"></div>
        {status[1] === 10 && <p className='alert'>{status[1]} actions</p>}
        {(status[1] === 0 || status[1] === 1) && <p>{status[1]} action</p>}
        {status[1] !== 0 && status[1] !== 1 && status[1] !== 10 && <p>{status[1]} actions</p>}
      </div>
      </div>
  )
}
 
export default StatusContainer;