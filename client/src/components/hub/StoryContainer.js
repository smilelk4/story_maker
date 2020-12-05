import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from './Story';
import { getStories } from '../../store/actions/storyAction';

const StoryContainer = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(state => state.hero);
  const stories = useSelector(state => state.story);

  useEffect(() => {
    for (let hero of heroes) {
      dispatch(getStories(hero.id));
    }
  }, [heroes, dispatch]);

  return (
    <div className="story__container">
      {stories.map(story => <Story {...story} />)}
    </div>
  );
}
 
export default StoryContainer;