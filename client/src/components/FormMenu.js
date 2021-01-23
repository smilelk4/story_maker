import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const FormMenu = ({viewMode, setViewMode, deletable=true}) => {
  return ( 
    <span className="form__menu">
    {viewMode === 'default' ? (
      <>
        <EditIcon onClick={() => setViewMode('edit')}/>
        {deletable ? (
          <DeleteIcon onClick={() => setViewMode('delete')}/>
        ) : ''}
      </>
    ) : (
      <p onClick={() => {setViewMode('default')}}><CloseIcon /></p>
    )}
  </span>
  );
}
 
export default FormMenu;