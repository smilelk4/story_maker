import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

const Activity = ({activities}) => {
  const [points, setPoints] = useState({});
  const lineColors = {
    0: 'red',
    1: 'blue'
  }

  // const points = [];

  useEffect(() => {
    if (Object.keys(points).length !== Object.keys(activities).length) {

      const xScale = scaleLinear().domain([0, 31])
                                  .range([0, 150]);
    
      const yScale = scaleLinear().domain([0, 10])
                                  .range([150, 0]);
  
      let dataLine = line().x((value, index) => xScale(index))
                            .y(yScale)
                            .curve(curveCardinal)

      for (let heroId in activities) {
        let combinedMonthData = [];
        for (let monthData in activities[heroId]) {
          combinedMonthData.push(...activities[heroId][monthData]);
        }
        setPoints({
          ...points,
          [heroId]: dataLine(combinedMonthData)
        });
      }
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
            <label for="filter">Filter By: </label>
            <select>
              <option>Last 1 Month</option>
              <option>Last 3 Months</option>
              <option>Last 12 Months</option>
            </select>
          </div>
      </div>
    </div>
  );
}
export default Activity;