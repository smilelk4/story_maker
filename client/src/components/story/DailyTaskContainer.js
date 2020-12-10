import React, { useEffect } from 'react'
import DailyTask from './DailyTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDailyTasks } from '../../store/actions/dailyTaskAction';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tasks = useSelector(state => state.task);

  useEffect(() => {
    dispatch(getDailyTasks(id));
  },[id, dispatch]);

  return ( 
    <div className="daily-task__container">
      {tasks.map(task => <DailyTask {...task} />)}
    </div>
  );
}
 
export default DailyTaskContainer;