import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Destination from './Destination';
import { getDestinations, 
         completeDestination } from '../store/actions/destinationActions';

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
      if (story) {
        dispatch(getDestinations(story.id));
      }
    }
  }, [stories, dispatch]);

  const onCompleted = async (destinationId) => {
    const data = await dispatch(completeDestination(destinationId));
    if (data.errors) return;

    // dispatch(raiseXP(1, heroId));
    
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    // const todaysActivity = activities[heroId][month][date - 1];

    // if (todaysActivity || todaysActivity === 0) {
      // dispatch(updateActivity(heroId));
    // } else {
      // dispatch(createActivity(heroId));
    // }

    // if (!container.current.children.length) {
      // setAllCompleted(true);
    // }
  };

  return ( 
    <div className="destination__container">
      {destinations.map(destination => (
          <Destination handleClick={onCompleted} {...destination} />))}
    </div>
  );
}
 
export default DestinationContainer;