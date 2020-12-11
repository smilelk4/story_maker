import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyTasks, updateDailyTask } from '../../store/actions/dailyTaskAction';
import DailyTask from './DailyTask';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const container = useRef();
  const [allCompleted, setAllCompleted] = useState(false);
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

  const onChecked = async storyId => {
    const data = await dispatch(updateDailyTask(storyId));

    // if (!data.errors) {
      // dispatch();
    // }
    if (!container.current.children.length) {
      setAllCompleted(true);
    }
  };

  return ( 
    <div ref={container} className="task__container">
      {tasks && tasks.map(task => (
        stringifyDate(today) !== stringifyDate(new Date(task.last_accomplished)) && (
          <DailyTask task={task} handleClick={onChecked}/>
        )
      ))}
      {allCompleted && <p className="task__all-completed">All done!</p>}
    </div>
  );
}
 
export default DailyTaskContainer;