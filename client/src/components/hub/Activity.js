import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { line, curveCardinal, scaleLinear } from 'd3';
import randomColor from 'randomcolor';

const Activity = ({activities}) => {
  const [lines, setLines] = useState({});
  const [filter, setFilter] = useState(1);
  const [colors, setColors] = useState({});
  const heroes = useSelector(state => state.hero);

  const filterActivities = useCallback(() => {
    let maxRange;
    if (+filter === 1) {
      maxRange = 30;
    } else if (+filter === 3) {
      maxRange = 90;
    } else {
      maxRange = 365;
    }

    const xScale = scaleLinear().domain([0, maxRange])
                                .range([0, 800]);

    const yScale = scaleLinear().domain([0, 10])
        .range([150, 10]);

    let dataLine = line().x((_value, index) => xScale(index))
    .y(yScale)
    .curve(curveCardinal)

    const currentMonth = new Date().getMonth() + 1;
    const pathData = {};
    const colorData = {};
    
    for (let heroId in activities) {
      let combinedData = [];
      for (let month = currentMonth + 1; month <= 12; month++) {
        combinedData.push(...activities[heroId][month]);
      }

      for (let month = 1; month <= currentMonth; month++) {
        combinedData.push(...activities[heroId][month]);
      }
      pathData[heroId] = combinedData;
    }

    if (+filter === 1) {
      for (let heroId in activities) {
        pathData[heroId] = dataLine(pathData[heroId].slice(-30));
        colorData[heroId] = randomColor();
      }
    } else if (+filter === 3) {
      for (let heroId in activities) {
        pathData[heroId] = dataLine(pathData[heroId].slice(-90));
        colorData[heroId] = randomColor();
      }
    } else {
      for (let heroId in activities) {
        pathData[heroId] = dataLine(pathData[heroId]);
        colorData[heroId] = randomColor();
      }
    } 
    setLines(pathData);
    setColors(colorData);
  }, [activities, filter]);

  useEffect(() => {
    filterActivities();
  }, [filter, filterActivities]);
  
  useEffect(() => {
    if (Object.keys(lines).length !== Object.keys(activities).length) {
      filterActivities();
    }
  }, [activities, lines, filterActivities]);

  return ( 
    <div className="activity">
        {lines && Object.entries(lines).length ? (
          <svg>
            {Object.entries(lines).map(line => (
            <path d={line[1]} fill='none' stroke={colors[line[0]]} key={line} />
            ))}
          </svg>
        ) : (
          <div className="hub__content--empty">
            <p>There are no activities yet.</p>
          </div>
        )}
      <div className="activity__filter-container">
          <div className="activity__category">
            {heroes.map(hero => (
              <p className="activity__tag" key={hero.id}>
                <span className="circle" style={{color:colors[hero.id]}}>&#9673;</span>
                <span>{hero.name}</span>
              </p>
            ))}
            <div>
              <select name="activity-filter"
                      onChange={e => setFilter(e.target.value)}>
                <option value={1}>Last 1 Month</option>
                <option value={3}>Last 3 Months</option>
                <option value={12}>Last 12 Months</option>
              </select>
            </div>
          </div>
      </div>
    </div>
  );
}
export default Activity;