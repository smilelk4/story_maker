import React, { useEffect } from 'react'
import DailyTask from './DailyTask';
import NewDailyTask from './NewDailyTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { getDailyTasks, deleteDailyTask,
         editDailyTask } from '../../store/actions/dailyTaskAction';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tasks = useSelector(state => state.task);

  useEffect(() => {
    dispatch(getDailyTasks(id));
  },[id, dispatch]);

  const deleteTask = async id => {
    return await dispatch(deleteDailyTask(id));
  };

  const updateTitle = async(id, newTitle) => {
    return await dispatch(editDailyTask(id, newTitle));
  };

  return (
    <PageAnimationWrapper>
      <div className="daily-task__container">
        <NewDailyTask />
        {tasks.map(task => <DailyTask updateTitle={updateTitle} 
                  deleteTask={deleteTask} {...task} />)}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default DailyTaskContainer;