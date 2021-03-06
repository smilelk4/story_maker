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
    dispatch(clearDestinationsAction());
    dispatch(getPastDestinations(id));
  }, [id, dispatch]);

  return ( 
    <PageAnimationWrapper>
      <div className="history__container">
        {destinations.length ? (destinations.map(destination => (
          <PastDestination {...destination} key={destination.id}/>
        ))) : (<p className="mystory__none-display">
                You haven't completed any destinations yet!</p>)}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default HistoryContainer;