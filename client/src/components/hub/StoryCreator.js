import React, { useState, useEffect, useRef } from 'react';
import {baseUrl} from '../../config';

const StoryCreator = () => {
  const container = useRef();

  const [page, setPage] = useState(1);
  const [worlds, setWorlds] = useState([]);
  const [world, setWorld] = useState(null);
  const [hero, setHero] = useState(null);
  const [title, setTitle] = useState('');

  useEffect(() => {
    (async () => {
      if (!worlds.length) {
        const res = await fetch(`${baseUrl}/worlds`);
        const data = await res.json();
        setWorlds(data.worlds);
      }
    })();
  }, [worlds]);

  useEffect(() => {
    console.log(world, 'world')
    if (container.current.children.length) {
      container.current.childNodes.forEach(child => child.classList.remove('selected'));
      container.current.childNodes[world - 1].classList.add('selected');
    }
  }, [world])

  const handleSelect = e => {
    e.target.classList.add('selected')
    console.log(e.target.classList)
  }

  const handleBack = () => {
    setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  return ( 
    <>
      <h2>Select Your World</h2>
      {page === 1 && (
        <div className="world__container" ref={container}> 
          {worlds.length && worlds.map(world => (
            <div className="world" onClick={() => setWorld(world.id)}>
              <div className="world__name">{world.name}</div>
            </div>
          ))}
        </div>
      )}
      <button disabled={page < 2} onClick={handleBack}>Back</button>
      <button disabled={page > 2} onClick={handleNext}>Next</button>
    </>
  );
}
 
export default StoryCreator;