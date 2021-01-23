import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { loadErrors } from '../../store/reducers/errorReducer';
import { createDestination } from '../../store/actions/destinationActions';

const NewDestination = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const finalDestination = useSelector(state => {
    return state.destination.find(d => !d.parent_destination_id);
  });
  const subDestinations = useSelector(state => {
    return state.destination.filter(d => d.parent_destination_id);
  });

  const [destinationTitle, setDestinationTitle] = useState('');
  const [subDestinationId, setSubDestinationId] = useState(subDestinations[0] ?
                                                  subDestinations[0].id : null);
  const [description, setDescription] = useState(null);
  const [targetDate, setTargetDate] = useState(moment());
  const [importance, setImportance] = useState(0);
  const [destinationType, setDestinationType] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!destinationTitle || !targetDate ) {
      return dispatch(loadErrors(['There is at least one field with missing value.']));
    }

    const data = await dispatch(createDestination({
      destinationTitle, description, targetDate,
      storyId: id,
      importance: destinationType === 'majorDestination'
                  ? importance : null,
      parentDestinationId: (destinationType === 'majorDestination' && (finalDestination))
                  ? finalDestination.id : subDestinationId
    }));

    if (!data.errors) {
      setDestinationTitle('');
      setSubDestinationId(null);
      setDescription('');
      setTargetDate(moment());
      setImportance(0);
      setDestinationType(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="destination__form">
        <div className="destination__section">
          <label htmlFor="destination-title">Destination Title</label>
          <input type="text" 
            value={destinationTitle} 
            name="destination-title"
            required
            onChange={e => setDestinationTitle(e.target.value)} />
        </div>
        <div className="destination__section">
          <label htmlFor="description">Description</label>
          <textarea
            value={description} 
            name="description"
            onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="destination__section">
          <label htmlFor="target-date">Target Date</label>
          <input type="date" 
            value={targetDate} 
            name="target-date"
            required
            onChange={e => setTargetDate(e.target.value)} />
        </div>
        <div className="destination__section">
          <label htmlFor="major-destination">Major Destination</label>
          <input type="radio" 
            value="majorDestination"
            id="major-destination"
            name="destination-type"
            required
            onChange={e => setDestinationType(e.target.value)} />
        </div>
        <div className="destination__section">
          <label htmlFor="sub-destination">Sub Destination</label>
          <input type="radio" 
            value="subDestination"
            id="sub-destination"
            name="destination-type"
            required
            onChange={e => setDestinationType(e.target.value)} />
        </div>
        {destinationType === 'majorDestination' && (
          <div className="destination__section">
          <label htmlFor="importance">Importance</label>
          <input type="range" 
              value={importance}
              min="0" 
              max="10" 
              name="importance"
              step=".01"
              className="small"
            onChange={e => setImportance(e.target.value)} />
          </div>
        )}
        {destinationType === 'subDestination' && (
          <div className="destination__section">
            <label htmlFor="parent-destination">Sub-destination of</label>
            <select name="parent-destination" onChange={e =>(
                                              setSubDestinationId(e.target.value))}>
              {subDestinations.map(subDestination => (
                <option key={subDestination.id} value={subDestination.id}>{subDestination.title}</option>
              ))}
            </select>
          </div>
        )}
        <button type="submit">Create a New Destination</button>
    </form>
  );
}
 
export default NewDestination;