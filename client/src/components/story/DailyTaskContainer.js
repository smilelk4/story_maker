import React, { useEffect } from 'react'
import DailyTask from './DailyTask';
import NewDailyTask from './NewDailyTask';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { getDailyTasks, deleteDailyTask,
         editDailyTask } from '../../store/actions/dailyTaskAction';
import { clearTasksAction } from '../../store/reducers/dailyTaskReducer';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const tasks = useSelector(state => state.task);

  useEffect(() => {
    dispatch(clearTasksAction());
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
      <NewDailyTask />
      <div className="daily-task__container">
        {tasks.length ? (tasks.map(task => (
          <DailyTask
            key={task.id}
            updateTitle={updateTitle} 
            deleteTask={deleteTask} {...task} />
        ))) : (
          <p className="mystory__none-display">
            You haven't added any daily tasks yet.
          </p>
        )}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default DailyTaskContainer;