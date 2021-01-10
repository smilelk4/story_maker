import { LOAD_ERRORS } from '../../reducers/errorReducer';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch({
      type: LOAD_ERRORS,
      errors: data.errors
    });
    return data;
  } 
  
  return data;
};

export default verifyData;