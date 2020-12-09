import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

const Activity = ({activities}) => {
  const [points, setPoints] = useState({});
  const [filter, setFilter] = useState(1);
  const lineColors = {
    0: 'red',
    1: 'blue'
  }

  // const points = [];

  const filterActivities = () => {
    let maxRange;
    if (+filter === 1) {
      maxRange = 30;
    } else if (+filter === 3) {
      maxRange = 90;
    } else {
      maxRange = 365;
    }

    const xScale = scaleLinear().domain([0, maxRange])
                                .range([0, 150]);

    const yScale = scaleLinear().domain([0, 10])
        .range([150, 0]);

    let dataLine = line().x((value, index) => xScale(index))
    .y(yScale)
    .curve(curveCardinal)

    const currentMonth = new Date().getMonth() + 1;
    const memo = {};
    
    for (let heroId in activities) {
      let combinedData = [];
      for (let month = currentMonth + 1; month <= 12; month++) {
        combinedData.push(...activities[heroId][month]);
      }

      for (let month = 1; month <= currentMonth; month++) {
        combinedData.push(...activities[heroId][month]);
      }
      memo[heroId] = combinedData;
    }

    if (+filter === 1) {
      for (let heroId in activities) {
        memo[heroId] = dataLine(memo[heroId].slice(-30));
      }
    } else if (+filter === 3) {
      for (let heroId in activities) {
        memo[heroId] = dataLine(memo[heroId].slice(-90));
      }
    } else {
      for (let heroId in activities) {
        memo[heroId] = dataLine(memo[heroId]);
      }
    }
    setPoints(memo);
  }

  useEffect(() => {
    filterActivities()
  }, [filter])
  
  useEffect(() => {

    if (Object.keys(points).length !== Object.keys(activities).length) {
      
      // const xScale = scaleLinear().domain([0, 31])
      //                             .range([0, 150]);
    
      // const yScale = scaleLinear().domain([0, 10])
      //                             .range([150, 0]);
  
      // let dataLine = line().x((value, index) => xScale(index))
      //                       .y(yScale)
      //                       .curve(curveCardinal)

      filterActivities();
    }
  }, [activities, points]);

  return ( 
    <div className="activity">
      <svg>
        {Object.values(points).map((point, i) => (
           <path d={point} fill='none' stroke={lineColors[i]} />
        ))}
      </svg>
      <div className="activity__filter-container">
          <div className="activity__category">
            <label for="activity-filter">Filter By: </label>
            <select name="activity-filter"
                    onChange={e => setFilter(e.target.value)}>
              <option value={1}>Last 1 Month</option>
              <option value={3}>Last 3 Months</option>
              <option value={12}>Last 12 Months</option>
            </select>
          </div>
      </div>
    </div>
  );
}
export default Activity;