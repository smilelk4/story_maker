import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Destination from './Destination';
import { getDestinations } from '../store/actions/destinationActions';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.destination);
  const { id } = useParams();  

  useEffect(() => {
    dispatch(getDestinations(id));
  }, [id, dispatch]);

  return ( 
    <div className="destination__container">
      {destinations.map(destination => <Destination {...destination} />)}
    </div>
  );
}
 
export default DestinationContainer;