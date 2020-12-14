import React, { useEffect } from 'react'
import DailyTask from './DailyTask';
import NewDailyTask from './NewDailyTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDailyTasks, 
         editDailyTask } from '../../store/actions/dailyTaskAction';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tasks = useSelector(state => state.task);

  useEffect(() => {
    dispatch(getDailyTasks(id));
  },[id, dispatch]);

  const updateTitle = async(id, newTitle) => {
    return await dispatch(editDailyTask(id, newTitle));
  };

  return ( 
    <div className="daily-task__container">
      <NewDailyTask />
      {tasks.map(task => <DailyTask updateTitle={updateTitle} {...task} />)}
    </div>
  );
}
 
export default DailyTaskContainer;