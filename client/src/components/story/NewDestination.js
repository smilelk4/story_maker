import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_ERRORS, CLEAR_ERRORS } from '../../store/reducers/errorReducer';

const NewDestination = () => {
  const dispatch = useDispatch();
  const subDestinations = useSelector(state => {
    return state.destination.filter(d => d.parent_destination_id);
  });

  const [destinationTitle, setDestinationTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [importance, setImportance] = useState('');
  const [destinationType, setDestinationType] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    if (!destinationTitle || !targetDate ) {
      return dispatch({
        type: LOAD_ERRORS,
        errors: ['There is at least one field with missing value.']
      });
    }

  // const data = await dispatch(createDestination({
  //   destinationTitle, description, targetDate, importance, 
  //   destinationType = 
  // }));

  };

  return (
    <div className="new-destination">
      <form onSubmit={handleSubmit}>
         <div>
            <label for="destination-title">Destination title</label>
            <input type="text" 
              value={destinationTitle} 
              name="destination-title"
              required
              onChange={e => setDestinationTitle(e.target.value)} />
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
              required
              onChange={e => setTargetDate(e.target.value)} />
          </div>
          Destination Type
          <div>
            <label for="major-destination">Major Destination</label>
            <input type="radio" 
              value="majorDestination"
              id="major-destination"
              name="destination-type"
              required
              onChange={e => setDestinationType(e.target.value)} />
          </div>
          <div>
            <label for="sub-destination">Sub Destination</label>
            <input type="radio" 
              value="subDestination"
              id="sub-destination"
              name="destination-type"
              required
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
                {subDestinations.map(subDestination => (
                  <option value={subDestination.id}>{subDestination.title}</option>
                ))}
                {/* <option value="">Data</option>
                <option value="">Data</option>
                <option value="">Data</option> */}
              </select>
            </div>
          )}
          <button type="submit">Create a New Destination</button>
      </form>
    </div>
  );
}
 
export default NewDestination;