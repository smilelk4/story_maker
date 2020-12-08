const router = require('express').Router();
const { Story, World, Destination, Memoir } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { worldId, heroId, title, destinationTitle, targetDate, importance } = req.body;
  let story = await Story.create({
    title: title.trim(),
    hero_id: heroId,
    world_id: worldId,
  });

  await Destination.create({
    story_id: story.id,
    title: destinationTitle,
    target_date: targetDate,
    importance
  });

  story = await Story.findOne({
    where: { 
      id: story.id
    },
    include: [World]
  });

  res.status(201).json({ stories: [story] });
}));

router.get('/:id(\\d+)',
asyncHandler(async (req, res) => {
  const story = await Story.findByPk(req.params.id);
  res.json({ story })
}));

router.get('/:id(\\d+)/destinations',
asyncHandler(async (req, res) => {
  const destinations = await Destination.findAll({
    where: {
      story_id: req.params.id,
    },
    order: [['target_date', 'ASC']]
  });

    // if (!destinations.length) next(createError('No destinations found.'));
    res.json({ destinations })
}));

router.get('/:id(\\d+)/memoirs', asyncHandler(async (req, res) => {
  const memoirs = await Memoir.findAll({
    where: { 
      story_id: req.params.id
    },
    order: [['createdAt', 'DESC']]
  });

  res.json({ memoirs });
}));



module.exports = router;



// useEffect(() => {


   //!!!!!!!!!!
  // console.log('CONTAINER')
  // console.log(activities)

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

  // const svg = select(chart.current);
  // const xScale = scaleLinear().domain([0, 31])
  //                             .range([0, 100]);

  // const yScale = scaleLinear().domain([0, 10])
  //                             .range([150, 0])

  // const xAxis = axisBottom(xScale);
      
//   if (Object.keys(activities).length) {

//     const res = [activities['1']['11'], activities['1']['12']]

//     console.log('RES', res)
  
//     for (let heroId in activities) {
//       console.log('----------------------')
//       console.log(activities[heroId]['12'])

//       let dataLine = line().x((value, index) => xScale(index))
//                            .y(yScale)
//                            .curve(curveCardinal)

//       // svg.selectAll('path').data([activities[heroId]['12']])
//       //                       .join('path')
//       //                       .attr('d', dataLine)
//       //                       .attr('fill', 'none')
//       //                       .attr('stroke', 'red');

//       svg.selectAll("path")
//       .data(activities[heroId]['12'])
//       .enter()
//       .append("path")
//         .attr("fill", "none")
//         .attr('stroke', 'red')
//         .attr("stroke-width", 1.5)
//         .attr("d", function(d){
//           return line()
//           .x((value, index) => xScale(index))
//           .y(yScale)
//           .curve(curveCardinal)
//         })


//       // chart.current.append(dataLine)

//       // for (let monthData in activities[heroData]) {
//       //   let dataLine = line().x((value, index) => xScale(index))
//       //                           .y(yScale)
//       //                           .curve(curveCardinal);
//       //   console.log(activities[heroData][monthData])
//       //   svg.selectAll('path').data([activities[heroData][monthData]])
//       //               .join('path')
//       //               .attr('d', dataLine)
//       //               .attr('fill', 'none')
//       //               .attr('stroke', 'red');

//       //   let dataLine2 = line().x((value, index) => xScale(index))
//       //                           .y(yScale)
//       //                           .curve(curveCardinal);
//       //   console.log(activities[heroData][monthData])
//       //   svg.selectAll('path').data([activities[heroData][monthData]])
//       //               .join('path')
//       //               .attr('d', dataLine2)
//       //               .attr('fill', 'none')
//       //               .attr('stroke', 'purple');
//       // }
//     }
//   }
  
//   // svg.selectAll('path').data([points]).join('path')
//   //                       .attr('d', dataLine)
//   //                       .attr('fill', 'none')
//   //                       .attr('stroke', 'blue');
// }, [activities, points]);