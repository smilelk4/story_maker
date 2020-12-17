import React from 'react'
import StoryHome from './StoryHome';
import { useSelector, useDispatch } from 'react-redux';
import PageAnimationWrapper from '../PageAnimationWrapper';

const StoryHomeContainer = () => {
  const hero = useSelector(state => state.hero[0]);
  const story = useSelector(state => state.story[0]);
  const destinations = useSelector(state => state.destination);

  return ( 
    <PageAnimationWrapper>
      <div className="storyhome__container">
        <StoryHome hero={hero} story={story} destinations={destinations}/>
      </div>
    </PageAnimationWrapper>
  );
}
 
export default StoryHomeContainer;