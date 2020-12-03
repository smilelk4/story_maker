import React from 'react';
import { NavLink } from 'react-router-dom';

const MyHub = () => {
  return ( 
    <div className="hub">
      <header className='hub__header'>
        <nav className="hub__navbar"></nav>
      </header>
      <main className="hub__main">
        <div className="hub__activity">
          Activity bar graph
        </div>
        <div className="hub__upcoming">
          Upcoming destinations
        </div>
      </main>

      <aside className="hub__sidebar">
        <div className="hub__top-container">
          <div className="hub__icon-holder">
            <NavLink to='/new-adventure'>Start a New Adventure</NavLink>
          </div>
        </div>
        <div className="hub__hero-container">
          Hero
        </div>
        <div className="hub__story-container">
          Stories
        </div>
      </aside>
    </div>
  );
}
 
export default MyHub;