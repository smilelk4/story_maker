import React, { useEffect } from 'react'
import StoryHome from './StoryHome';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { getUpcomingDestinations } from '../../store/actions/destinationActions';
import { clearDestinationsAction } from '../../store/reducers/destinationReducer';

const StoryHomeContainer = () => {
  const dispatch = useDispatch();
  const hero = useSelector(state => state.hero[0]);
  const story = useSelector(state => state.story[0]);
  const { id } = useParams();  
  const destinations = useSelector(state => state.destination);
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(clearDestinationsAction());
  //   dispatch(getUpcomingDestinations(id));
  // }, [id, dispatch]);

  useEffect(() => {
    // if (!destinations.length) {
      // debugger;
      dispatch(clearDestinationsAction());
      dispatch(getUpcomingDestinations(id));
    // }
  }, [id, location, dispatch]);

  // useEffect(() => {
  //   // if (id) {
  //     dispatch(getUpcomingDestinations(id));
  //   // }
  // }, [id, dispatch]);

  // useEffect(() => {
  //   dispatch(clearDestinationsAction());
  //   if (id) {
  //     dispatch(getUpcomingDestinations(id));
  //   }
  // }, [location])

  return ( 
    <PageAnimationWrapper>
      <div className="storyhome__container">
        {hero && destinations.length && <StoryHome hero={hero} story={story} destinations={destinations}/>}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default StoryHomeContainer;