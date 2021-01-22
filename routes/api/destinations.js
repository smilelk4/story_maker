const router = require('express').Router();
const { Destination } = require('../../db/models');
const { asyncHandler } = require('../../utils');

router.post('/', 
  asyncHandler(async (req, res) => {
  const { destinationTitle, description, targetDate,
        importance, storyId, parentDestinationId } = req.body;
        
  let destination = await Destination.create({
    story_id: storyId,
    parent_destination_id: parentDestinationId,
    title: destinationTitle,
    description,
    target_date: targetDate,
    importance
  });

  res.status(201).json({ destinations: [destination] });
}));

router.put('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { accomplished, newTitle, newDescription, newTargetDate } = req.body;
        
  const destination = await Destination.findOne({
    where: { id }
  });

  if (accomplished) {
    await destination.update({
      accomplished
    });
  } else {
    await destination.update({
      title: newTitle,
      description: newDescription,
      target_date: newTargetDate
    });
  }

  res.json({destination});
}));

router.delete('/:id(\\d+)', 
  asyncHandler(async (req, res) => {
  const { id } = req.params;
        
  const destination = await Destination.findOne({
    where: { id }
  });

  await destination.destroy();
  res.status(200).json({ destination: { id } });
}));

module.exports = router;