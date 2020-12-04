import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from './Story';
import { getStories } from '../../store/actions/storyAction';

const StoryContainer = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(state => state.hero);
  const stories = useSelector(state => state.story);

  useEffect(() => {
    console.log(stories, 'stories')
    // if (!stories.length) {
      heroes.forEach(hero => {
        dispatch(getStories(hero.id));
      });
    // }

    // if (heroIds.length) {
    // }
  }, [heroes, dispatch]);

  return (
    // <div className="hero__container">
    //   {heroes.map(hero => <Hero {...hero} />)}
    // </div>
    <h3>Hi</h3>
  );
}
 
export default StoryContainer;