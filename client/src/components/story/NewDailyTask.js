import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createDailyTask } from '../../store/actions/dailyTaskAction';

const NewDailyTask = () => {
  const dispatch = useDispatch();
  const { id: storyId } = useParams();

  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);


  const handleSubmit = async e => {
    e.preventDefault();

    const data = await dispatch(createDailyTask({storyId, title}));


    if (!data.errors) {
      setTitle('');
    }
  }

  return ( 
    <form onSubmit={handleSubmit} className="daily-task__form">
        <div className="daily-task__form-section">
          <label for="title">Title</label>
          <input type="text" 
            value={title} 
            name="title"
            required
            onChange={e => setTitle(e.target.value)} />
        </div>
        <button type="submit">Create a New Task</button>
    </form>
  );
}
 
export default NewDailyTask;