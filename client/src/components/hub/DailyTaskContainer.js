import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyTasks } from '../../store/actions/dailyTaskAction';
import DailyTask from './DailyTask';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const stories = useSelector(state => state.story);
  const tasks = useSelector(state => state.task);
  const today = new Date();

  const stringifyDate = date => date.toDateString();

  useEffect(() => {
    if (stories.length) {
      for (let story of stories) {
        dispatch(getDailyTasks(story.id));
      }
    }
  }, [stories, dispatch]);

  return ( 
    <div className="task__container">
      {tasks && tasks.map(task => (
        stringifyDate(today) !== stringifyDate(new Date(task.last_accomplished)) && (
          <DailyTask task={task} />
        )
      ))}
    </div>
  );
}
 
export default DailyTaskContainer;