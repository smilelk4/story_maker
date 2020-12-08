import React, { useState, useEffect, useRef } from 'react';
import { select, line, curveCardinal, axisBottom, scaleLinear } from 'd3';
import {nest} from 'd3-collection';

const Activity = ({activities}) => {
  const [points, setPoints] = useState({});
  const chart = useRef();

  // const points = [];

  useEffect(() => {

    if (Object.keys(points).length !== Object.keys(activities).length) {

      const xScale = scaleLinear().domain([0, 31])
                                  .range([0, 100]);
    
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

        // const svg = select(chart.current);
        // svg.selectAll("path")
        //   .data(combinedMonthData)
        //   .enter()
        //   .append("path")
        //     .attr("fill", "none")
        //     .attr('stroke', 'red')
        //     .attr("stroke-width", 1.5)
        //     .attr("d", function(d){
        //       return line()
        //       .x((value, index) => xScale(index))
        //       .y(yScale)
        //       .curve(curveCardinal)
        //     })

        

        
        setPoints({
          ...points,
          [heroId]: dataLine(combinedMonthData)
        });
      }

      // const svg = select(chart.current);
  
      // const a = dataLine(activities['1']['12']);
      // const b = dataLine([4, 5, 4]);
    
      // setPoints({ a, b });
    }

  }, [activities, points]);

  return ( 
    <div className="activity">
      <svg ref={chart}>
           <path d={points['1']} fill='none' stroke={'red'} />
           <path d={points['2']} fill='none' stroke={'blue'} />
      </svg>
    </div>
  );
}
export default Activity;