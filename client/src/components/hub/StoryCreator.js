import React, { useState, useEffect, useRef } from 'react';
import {baseUrl} from '../../config';

const StoryCreator = () => {
  const worldContainer = useRef();
  const heroContainer = useRef();

  const [page, setPage] = useState(1);
  const [worlds, setWorlds] = useState([]);
  const [world, setWorld] = useState(null);
  const [hero, setHero] = useState(null);
  const [heroes, setHeroes] = useState([]);
  const [title, setTitle] = useState('');
  const [pageTitle, setPageTitle] = useState('');

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
    (async () => {
      if (!heroes.length) {
        const res = await fetch(`${baseUrl}/heroes`);
        const data = await res.json();
        setHeroes(data.heroImages);
      }
    })();
  }, [heroes])

  useEffect(() => {
    if (page === 1) {
      setPageTitle('Select Your World');
      if (worldContainer.current.children.length && world) {
        worldContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        worldContainer.current.childNodes[world - 1].classList.add('selected');
      }
    }
  }, [world, page])

  useEffect(() => {
    if (page === 2) {
      setPageTitle('Select Your Hero');
      if (heroContainer.current.children.length && hero) {
        heroContainer.current.childNodes.forEach(child => child.classList.remove('selected'));
        heroContainer.current.childNodes[hero - 1].classList.add('selected');
      }
    }
  }, [hero, page])

  const handleBack = () => {
    setPage(page - 1);
  }

  const handleNext = () => {
    setPage(page + 1);
  }

  return ( 
    <>
      <h2>{pageTitle}</h2>
      {page === 1 && (
        <div className="modal__page-container" ref={worldContainer}> 
          {worlds.length && worlds.map(world => (
            <div className="world" onClick={() => setWorld(world.id)}>
              <div className="world__name">{world.name}</div>
            </div>
          ))}
        </div>
      )}
      {page === 2 && (
        <div>
          <div className="modal__page-container" ref={heroContainer}> 
            {heroes.length && heroes.map(hero => (
              <div className="hero" onClick={() => setHero(hero.id)}>
                <img src={hero.image_url} alt={hero.id} />
              </div>
            ))}
          </div>
        </div>
      )}
      <button disabled={page < 2} onClick={handleBack}>Back</button>
      <button disabled={page > 2} onClick={handleNext}>Next</button>
    </>
  );
}
 
export default StoryCreator;