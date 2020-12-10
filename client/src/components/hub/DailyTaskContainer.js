import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDailyTasks } from '../../store/actions/dailyTaskAction';
import DailyTask from './DailyTask';

const DailyTaskContainer = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(state => state.hero);
  const tasks = useSelector(state => state.task);
  const today = new Date();

  const stringifyDate = date => date.toDateString();

  useEffect(() => {
    if (heroes.length) {
      for (let hero of heroes) {
        dispatch(getDailyTasks(hero.id));
      }
    }
  }, [heroes, dispatch]);

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