import React from 'react';

const InputField = ({type, placeholder, currentState, updateState}) => {
  return ( 
    <div>
      <input
        type={type}
        value={currentState}
        placeholder={placeholder}
        required={true}
        onChange={e => updateState(e.target.value)}
      />
    </div>
  );
}
 
export default InputField;