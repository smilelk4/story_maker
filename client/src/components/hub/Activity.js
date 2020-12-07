import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';

const Activity = ({activities}) => {
  const [points, setPoints] = useState({});
  const chart = useRef();

  useEffect(() => {
    console.log('CONTAINER')
    console.log(activities)

    // if (!points.length && activities) {
    //   for (let heroId in activities) {
        // if (!(heroId in points)) {
        //   setPoints(points[heroId] = activities[heroId].map(activity => (
        //     activity.point
        //   )));
        // }
      // }

    //  setPoints(activities.map(activity => activity.point));
    // }

    const svg = select(chart.current);
    const xScale = scaleLinear().domain([0, 31])
                                .range([0, 100]);

    const yScale = scaleLinear().domain([0, 10])
                                .range([150, 0])

    // const xAxis = axisBottom(xScale);

    
    const colors = ['red', 'blue', 'green'];
    
    if (Object.keys(activities).length) {
      for (let heroData in activities) {
        for (let monthData in activities[heroData]) {
          let dataLine = line().x((value, index) => xScale(index))
                                  .y(yScale)
                                  .curve(curveCardinal);
          console.log(activities[heroData][monthData])
          svg.selectAll('path').data([activities[heroData][monthData]]).join('path')
                      .attr('d', dataLine)
                      .attr('fill', 'none')
                      .attr('stroke', colors[Math.floor(Math.random() * 3)]);
        }
      }
    }
    
    // svg.selectAll('path').data([points]).join('path')
    //                       .attr('d', dataLine)
    //                       .attr('fill', 'none')
    //                       .attr('stroke', 'blue');
  }, [activities, points]);

  return ( 
    <div className="activity">
      <svg ref={chart}>
        {/* <path d="M10,150 100,100 150,120" stroke="blue" fill="none" /> */}
      </svg>
    </div>
  );
}
 
export default Activity;