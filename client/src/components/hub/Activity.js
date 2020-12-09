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

  const filterActivities = (dataLine) => {
    const currentMonth = new Date().getMonth() + 1;
    const memo = {};

    if (filter === 1) {
      for (let heroId in activities) {
        memo[heroId] = dataLine(activities[heroId][currentMonth]);
      }
      setPoints(memo);

      // for (let heroId in activities) {
      //   let combinedMonthData = [];
      //   for (let monthData in activities[heroId]) {
      //     combinedMonthData.push(...activities[heroId][monthData]);
      //   }
      //   setPoints({
      //     ...points,
      //     [heroId]: dataLine(combinedMonthData)
      //   });
      // }
    } else if (+filter === 3) {
      // let combinedMonthData = [];
      // debugger
      for (let heroId in activities) {
        memo[heroId] = dataLine([
          // ...activities[heroId][currentMonth - 2],
          ...activities[heroId][currentMonth - 1],
          ...activities[heroId][currentMonth]
        ]);
      }
      setPoints(memo);
    }
  }

  useEffect(() => {
    const xScale = scaleLinear().domain([0, 31])
    .range([0, 150]);

    const yScale = scaleLinear().domain([0, 10])
    .range([150, 0]);

    let dataLine = line().x((value, index) => xScale(index))
    .y(yScale)
    .curve(curveCardinal)

    // debugger
    console.log(filter, '!!!!!!!!!!!!!!!!!!')
    filterActivities(dataLine)
  }, [filter])
  
  useEffect(() => {

    if (Object.keys(points).length !== Object.keys(activities).length) {
      
      const xScale = scaleLinear().domain([0, 31])
                                  .range([0, 150]);
    
      const yScale = scaleLinear().domain([0, 10])
                                  .range([150, 0]);
  
      let dataLine = line().x((value, index) => xScale(index))
                            .y(yScale)
                            .curve(curveCardinal)

      filterActivities(dataLine);
    }
  }, [activities, points, filter]);

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
              <option value={+1}>Last 1 Month</option>
              <option value={+3}>Last 3 Months</option>
              <option value={+12}>Last 12 Months</option>
            </select>
          </div>
      </div>
    </div>
  );
}
export default Activity;