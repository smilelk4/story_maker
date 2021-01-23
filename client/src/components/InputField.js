import React from 'react';

const InputField = ({type, placeholder="", currentState, updateState}) => {
  return ( 
    <input
      type={type}
      value={currentState}
      placeholder={placeholder}
      required={true}
      onChange={e => updateState(e.target.value)}
    />
  );
}
 
export default InputField;