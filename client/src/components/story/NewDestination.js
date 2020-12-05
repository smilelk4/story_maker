import React, { useState } from 'react';

const NewDestination = () => {
  const [destinationTitle, setDestinationTitle] = useState('');
  const [destinationSubTitle, setDestinationSubTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [importance, setImportance] = useState('');
  const [destinationType, setDestinationType] = useState('');

  return (
    <div className="new-destination">
      <form>
         <div>
            <label for="destination-title">Destination title</label>
            <input type="text" 
              value={destinationTitle} 
              name="destination-title"
              onChange={e => setDestinationTitle(e.target.value)} />
          </div>
         <div>
            <label for="destination-subtitle">Destination Subtitle</label>
            <input type="text" 
              value={destinationSubTitle} 
              name="destination-subtitle"
              onChange={e => setDestinationSubTitle(e.target.value)} />
          </div>
         <div>
            <label for="description">Description</label>
            <input type="textarea" 
              value={description} 
              name="description"
              onChange={e => setDescription(e.target.value)} />
          </div>
          <div>
            <label for="target-date">Target Date</label>
            <input type="date" 
              value={targetDate} 
              name="target-date"
              onChange={e => setTargetDate(e.target.value)} />
          </div>
          Destination Type
          <div>
            <label for="major-destination">Major Destination</label>
            <input type="radio" 
              value="majorDestination"
              id="major-destination"
              name="destination-type"
              onChange={e => setDestinationType(e.target.value)} />
          </div>
          <div>
            <label for="sub-destination">Sub Destination</label>
            <input type="radio" 
              value="subDestination"
              id="sub-destination"
              name="destination-type"
              onChange={e => setDestinationType(e.target.value)} />
          </div>
          {destinationType === 'majorDestination' && (
            <div>
            <label for="importance">Importance</label>
            <input type="number" 
              value={importance} 
              name="importance"
              onChange={e => setImportance(e.target.value)} />
            </div>
          )}
          {destinationType === 'subDestination' && (
            <div>
              <label for="parent-destination">Sub-destination of</label>
              <select name="parent-destination">
                <option value="">Data</option>
                <option value="">Data</option>
                <option value="">Data</option>
              </select>
            </div>
          )}
      </form>
    </div>
  );
}
 
export default NewDestination;