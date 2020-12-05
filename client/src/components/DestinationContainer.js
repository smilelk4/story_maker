import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Destination from './Destination';
import { getDestinations } from '../store/actions/destinationActions';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.destination);
  const stories = useSelector(state => state.story);
  const userId = useSelector(state => state.user.id);
  const { id } = useParams();  

  useEffect(() => {
    if (id) {
      return dispatch(getDestinations(id));
    }
  }, [id, userId, dispatch]);

  useEffect(() => {
    for (let story of stories) {
      dispatch(getDestinations(story.id));
    }
  }, [stories, dispatch]);

  return ( 
    <div className="destination__container">
      {destinations.map(destination => <Destination {...destination} />)}
    </div>
  );
}
 
export default DestinationContainer;