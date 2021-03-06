import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageAnimationWrapper from './PageAnimationWrapper';
import Destination from './Destination';
import { getUpcomingDestinations, 
         completeDestination, deleteDestination,
         editDestination } from '../store/actions/destinationActions';
import { clearDestinationsAction } from '../store/reducers/destinationReducer';
import Line from './svg/Line';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.destination);
  const stories = useSelector(state => state.story);
  const { id } = useParams();  

  useEffect(() => {
    if (id) {
      dispatch(clearDestinationsAction());
      dispatch(getUpcomingDestinations(id));
    }
  }, [id, dispatch]);
  
  useEffect(() => {
    if (destinations.length && 
      destinations.some(destination => destination.accomplished)) {
      dispatch(clearDestinationsAction());
    }
  }, [id, destinations, dispatch]);

  useEffect(() => {
    for (let story of stories) {
      if (story.id) {
        dispatch(getUpcomingDestinations(story.id));
      }
    }
  }, [stories, dispatch]);

  const handleEdit = async inputtedInfo => {
    return await dispatch(editDestination(inputtedInfo));
  }

  const handleDelete = async id => {
    return await dispatch(deleteDestination(id));
  }

  const onCompleted = async (destinationId) => {
    const data = await dispatch(completeDestination(destinationId));
    if (data.errors) return;
  };

  return ( 
    <PageAnimationWrapper>
      <div className="destination__container">
        {destinations.length ? (destinations.map(destination => (
          <div key={destination.id}>
            {destinations[0] !== destination && <Line /> }
            <Destination key={destination.id}
                         handleClick={onCompleted}
                         editDestination={handleEdit}
                         deleteDestination={handleDelete}
                         {...destination} />
          </div>
        ))) : (
        <div className="hub__content--empty">
          <p>There are no destinations yet.</p>
        </div>
        )}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default DestinationContainer;