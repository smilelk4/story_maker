const router = require('express').Router();
const { Story, World, Destination } = require('../../db/models');
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

module.exports = router;