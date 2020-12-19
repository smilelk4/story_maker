import React, { useEffect } from 'react'
import StoryHome from './StoryHome';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { getDestinations } from '../../store/actions/destinationActions';

const StoryHomeContainer = () => {
  const dispatch = useDispatch();
  const hero = useSelector(state => state.hero[0]);
  const story = useSelector(state => state.story[0]);
  const destinations = useSelector(state => state.destination);
  const { id } = useParams();  

  useEffect(() => {
    if (id) {
      return dispatch(getDestinations(id));
    }
  }, [id, dispatch]);

  return ( 
    <PageAnimationWrapper>
      <div className="storyhome__container">
        {hero && destinations.length && <StoryHome hero={hero} story={story} destinations={destinations}/>}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default StoryHomeContainer;