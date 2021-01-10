import { loadErrors } from '../../reducers/errorReducer';

const verifyData = async (res, dispatch) => {
  const data = await res.json();

  if (!res.ok) {
    dispatch(loadErrors(data.errors));
    return data;
  } 
  return data;
};

export default verifyData;