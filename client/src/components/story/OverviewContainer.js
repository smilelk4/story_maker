import React, { useEffect, useState } from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Overview from './Overview';

const OverviewContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task);
  const destinations = useSelector(state => state.destination);
  const progress = useSelector(state => state.progress);
  const [uncompletedTasks, setUncompletedTasks] = useState([]);
  const [overdueDestinations, setOverdueDestinations] = useState([]);
  const { id } = useParams();
  const today = moment().format("MM-DD-YYYY");

  useEffect(() => {
    const uncompletedTasks = tasks.filter(task => (
              (moment(task.last_accomplished).format("MM-DD-YYYY")) < today) ||
                !task.last_accomplished);
    setUncompletedTasks(uncompletedTasks);
  },[id, tasks, today, dispatch]);

  useEffect(() => {
    const overdueDestinations = destinations.filter(destination => (
              moment(destination.target_date).isBefore(today, 'days')));
    setOverdueDestinations(overdueDestinations);
  },[destinations, today]);

  return ( 
    <div className="overview__container">
      <Overview progress={progress}
                uncompletedTasks={uncompletedTasks}
                overdueDestinations={overdueDestinations} />
    </div>
  );
}
 
export default OverviewContainer;