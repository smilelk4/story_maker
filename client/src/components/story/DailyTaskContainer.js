import React, { useEffect } from 'react'
import DailyTask from './DailyTask';
import NewDailyTask from './NewDailyTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDailyTasks, updateDailyTask } from '../../store/actions/dailyTaskAction';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tasks = useSelector(state => state.task);

  useEffect(() => {
    dispatch(getDailyTasks(id));
  },[id, dispatch]);

  const onChecked = id => {
    dispatch(updateDailyTask(id));
  };

  return ( 
    <div className="daily-task__container">
      <NewDailyTask />
      {tasks.map(task => <DailyTask handleClick={onChecked} {...task} />)}
    </div>
  );
}
 
export default DailyTaskContainer;