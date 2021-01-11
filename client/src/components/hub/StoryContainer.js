import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Story from './Story';
import ScrollArrow from './ScrollArrow';
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
      <ScrollArrow handleLeftScroll={handleLeftScroll}
                   handleRightScroll={handleRightScroll}/>
      {stories.length ? (stories.map(story => <Story {...story} key={story.id}/>)) :
      (
        <div className="hub__content--empty">
          <p>There are no stories yet.</p>
          <p>Once heroes are created, click on "Start a New Adventure" to create a story.</p>
        </div>
      )}
    </div>
  );
}
 
export default StoryContainer;