import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import PageAnimationWrapper from './PageAnimationWrapper';
import Destination from './Destination';
import { getUpcomingDestinations, 
         completeDestination } from '../store/actions/destinationActions';
import { clearDestinationsAction } from '../store/reducers/destinationReducer';
import Line from './svg/Line';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const destinations = useSelector(state => state.destination);
  const stories = useSelector(state => state.story);
  const userId = useSelector(state => state.user.id);
  const { id } = useParams();  

  useEffect(() => {
    dispatch(clearDestinationsAction());
    dispatch(getUpcomingDestinations(id));
  }, [id, dispatch]);
  
  useEffect(() => {
    if (destinations.length && 
      destinations.some(destination => destination.accomplished)) {
      dispatch(clearDestinationsAction());
    }
  }, [id, destinations, dispatch]);

  useEffect(() => {
    for (let story of stories) {
      if (story) {
        // debugger
        dispatch(getUpcomingDestinations(story.id));
      }
    }
  }, [stories, dispatch]);

  const onCompleted = async (destinationId) => {
    const data = await dispatch(completeDestination(destinationId));
    if (data.errors) return;
  };

  return ( 
    <PageAnimationWrapper>
      <div className="destination__container">
        {destinations.map(destination => (
          <>
            {destinations[0] !== destination && <Line /> }
            <Destination handleClick={onCompleted} {...destination} />
          </>
        ))}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default DestinationContainer;