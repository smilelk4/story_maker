import React from 'react';
import ToDo from './ToDo';

const ToDoContainer = (...props) => {
  return ( 
    <div className="todo__container">
      <ToDo />
    </div>
  );
}
 
export default ToDoContainer;