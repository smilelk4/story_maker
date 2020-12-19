import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageAnimationWrapper from '../PageAnimationWrapper';
import PastDestination from './PastDestination';
import { getPastDestinations } from '../../store/actions/destinationActions';
import { clearDestinationsAction } from '../../store/reducers/destinationReducer';

const HistoryContainer = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(state => state.destination);
  const { id } = useParams();  

  useEffect(() => {
    if (destinations.length && !destinations[0].accomplished) {
      dispatch(clearDestinationsAction());
      dispatch(getPastDestinations(id));
    }
  }, [id, destinations, dispatch]);

  return ( 
    <PageAnimationWrapper>
      <div className="history__container">
        {destinations.map(destination => (
          <PastDestination {...destination} />
        ))}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default HistoryContainer;