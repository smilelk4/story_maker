import React from 'react';

const DeleteForm = ({handleDelete, title}) => {
  return ( 
    <form className="form--delete" 
          onSubmit={handleDelete}>
      <p>Are you sure?</p>
      <p className="title">{title}</p>
      <button type="submit">Delete Task</button>
    </form>
  );
}
 
export default DeleteForm;