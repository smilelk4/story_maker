import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

const FormMenu = ({setViewMode, viewMode='default',
                   deletable=true, editable=true}) => {
  return ( 
    <span className="form__menu">
    {viewMode === 'default' ? (
      <>
        {editable ? (
          <EditIcon onClick={() => setViewMode('edit')}/>
        ) : ''}
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