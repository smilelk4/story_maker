import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs } from '../../store/actions/memoirActions';
import { getDailyTasks } from '../../store/actions/dailyTaskAction';
import Overview from './Overview';

const OverviewContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task);
  const progress = useSelector(state => state.progress);
  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const { id } = useParams();
  const today = moment();

  useEffect(() => {
    dispatch(getMemoirs(id));
    dispatch(getDailyTasks(id));
  },[id, dispatch]);

  useEffect(() => {
    if (tasks.length) {
      const uncompletedTasks = tasks.filter(task => (
                (moment(task.last_accomplished).diff(today, 'days')) < 0) ||
                 !task.last_accomplished);
      setUncompletedTasks(uncompletedTasks);
    }
  },[tasks]);

  return ( 
    <div className="overview__container">
      <Overview progress={progress} uncompletedTasks={uncompletedTasks}/>
    </div>
  );
}
 
export default OverviewContainer;