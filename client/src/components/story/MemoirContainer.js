import React, { useEffect } from 'react'
import NewMemoir from './NewMemoir';
import PageAnimationWrapper from '../PageAnimationWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMemoirs, editMemoir, 
         deleteMemoir } from '../../store/actions/memoirActions';
import { clearMemoirsAction } from '../../store/reducers/memoirReducer';
import Memoir from './Memoir';

const MemoirContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const memoirs = useSelector(state => state.memoir);

  useEffect(() => {
    dispatch(clearMemoirsAction());
    dispatch(getMemoirs(id));
  },[id, dispatch]);

  const handleDelete = async id => {
    return await dispatch(deleteMemoir(id));
  };

  const handleEdit = async data => {
    return await dispatch(editMemoir(data));
  };

  return ( 
    <PageAnimationWrapper>
      <NewMemoir />
      <div className="memoir__container">
        {memoirs.length ? (
          memoirs.map(memoir => <Memoir 
              editMemoir={handleEdit}    
              deleteMemoir={handleDelete}
              key={memoir.id}
              {...memoir}  />)) : (
            <p className="mystory__none-display">
                You haven't added any memoirs yet.
            </p>
        )}
      </div>
    </PageAnimationWrapper>
  );
}
 
export default MemoirContainer;