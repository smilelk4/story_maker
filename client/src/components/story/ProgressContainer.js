import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHero } from '../../store/actions/heroAction';

const ProgressContainer = () => {
  const dispatch = useDispatch();
  const heroId = useSelector(state => state.story[0] ? 
                  state.story[0].hero_id : null);

  useEffect(() => {
    dispatch(getHero(heroId));
  }, [heroId, dispatch]);

  return ( 
    <div className="progress">
      ProgressContainer
    </div>
  );
}
 
export default ProgressContainer;