import React, { useState, useEffect } from 'react';
import {baseUrl} from '../../config';

const StoryCreator = () => {
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
        console.log(data.worlds)
        setWorlds(data.worlds)
        // await setWorlds([1, 2, 3])
        // console.log(worlds)
        console.log(worlds, 2)

      }
    })();
  }, [worlds]);

  return ( 
    <>
      <h2>Select Your World</h2>
      <div className="world__container"> 
        {worlds.length && worlds.map(world => (
          <div className="world">
            <div className="world__name">{world.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
 
export default StoryCreator;