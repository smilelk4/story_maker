import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyTasks, completeDailyTask } from '../../store/actions/dailyTaskAction';
import { createActivity, updateActivity } from '../../store/actions/activityAction';
import { raiseXP } from '../../store/actions/heroAction';
import DailyTask from './DailyTask';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const container = useRef();
  const [allCompleted, setAllCompleted] = useState(false);
  const stories = useSelector(state => state.story);
  const activities = useSelector(state => state.activity);
  const tasks = useSelector(state => state.task);
  const today = new Date();

  const stringifyDate = date => date.toDateString();

  useEffect(() => {
    if (stories.length) {
      for (let story of stories) {
        dispatch(getDailyTasks(story.id));
      }
    }
    
    if (!container.current.children.length) {
      setAllCompleted(true);
    }
  }, [stories, dispatch]);

  const onChecked = async (storyId, heroId) => {
    const data = await dispatch(completeDailyTask(storyId));
    if (data.errors) return;

    dispatch(raiseXP(1, heroId));
    
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const todaysActivity = activities[heroId][month][date - 1];

    if (todaysActivity || todaysActivity === 0) {
      dispatch(updateActivity(heroId));
    } else {
      dispatch(createActivity(heroId));
    }

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
      {/* {allCompleted ? (<p className="task__all-completed">All done!</p>) : ''} */}
    </div>
  );
}
 
export default DailyTaskContainer;