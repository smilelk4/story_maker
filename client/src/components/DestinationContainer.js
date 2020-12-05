import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Destination from './Destination';
import { getDestinations } from '../store/actions/destinationActions';

const DestinationContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();  

  useEffect(() => {
    dispatch(getDestinations(+id));
  }, [id, dispatch]);

  return ( 
    <div className="destination">
      <Destination />
      <Destination />
      <Destination />
    </div>
  );
}
 
export default DestinationContainer;