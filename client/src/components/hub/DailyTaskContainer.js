import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import bodymovin from 'lottie-web';
import moment from 'moment';
import { getDailyTasks, completeDailyTask } from '../../store/actions/dailyTaskAction';
import { createActivity, updateActivity } from '../../store/actions/activityAction';
import { raiseXP } from '../../store/actions/heroAction';
import DailyTask from './DailyTask';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const container = useRef();
  const svgContainer = useRef();
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
    const a = bodymovin.loadAnimation({
      wrapper: document.querySelector('.svg-container'),
      animType: 'svg',
      loop: false,
      path: '/data.json',
    });

    a.addEventListener('complete', function(){
      a.destroy()
    });

    const data = await dispatch(completeDailyTask(storyId));
    if (data.errors) return;

    dispatch(raiseXP(1, heroId));
    
    const today = moment();
    const month = today.month() + 1;
    const date = today.date();
    const todaysActivity = activities[heroId][month][date - 1];

    if (todaysActivity) {
      dispatch(updateActivity(heroId, today));
    } else {
      dispatch(createActivity(heroId, today));
    }


    if (!container.current.children.length) {
      setAllCompleted(true);
    }
  };

  return ( 
    <>
    <div ref={container} className="task__container">
      <div ref={svgContainer.current} className="svg-container"></div>
      {tasks && tasks.map(task => (
        stringifyDate(today) !== stringifyDate(new Date(task.last_accomplished)) && (
          <DailyTask task={task} handleClick={onChecked}/>
        )
      ))}
      {/* {allCompleted ? (<p className="task__all-completed">All done!</p>) : ''} */}
    </div>
    </>
  );
}
 
export default DailyTaskContainer;