import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import Overview from './Overview';

const OverviewContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const progress = useSelector(state => state.progress);

  useEffect(() => {
    dispatch(getMemoirs(id));
  },[id, dispatch]);

  return ( 
    <div className="overview__container">
      <Overview progress={progress}/>
    </div>
  );
}
 
export default OverviewContainer;