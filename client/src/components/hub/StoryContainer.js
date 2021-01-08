import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from './Story';
import { getStories } from '../../store/actions/storyAction';

const StoryContainer = () => {
  const dispatch = useDispatch();
  const heroes = useSelector(state => state.hero);
  const stories = useSelector(state => state.story);
  const container = useRef(null);

  useEffect(() => {
    for (let hero of heroes) {
      dispatch(getStories(hero.id));
    }
  }, [heroes, dispatch]);

  const handleLeftScroll = () => {
    container.current.scrollLeft -= 100;

  };
  const handleRightScroll = () => {
    container.current.scrollLeft += 100;
  };

  return (
    <div ref={container} className="story__container">
      <div className="hero__container-left-scroll"
            onClick={handleLeftScroll}>&#9001;</div>
      <div className="hero__container-right-scroll" 
            onClick={handleRightScroll}>&#9002;</div>
      {stories.map(story => <Story {...story} key={story.id}/>)}
    </div>
  );
}
 
export default StoryContainer;