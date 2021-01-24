export const LOAD_USER = 'LOAD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export const clearUserAction = () => ({
  type: LOGOUT_USER
});

const userReducer = (state = {}, action) => {
  switch(action.type) {
    case LOAD_USER: {
      return {
        id: action.user.id,
        username: action.user.username,
        profileImage: action.user.profileImage || action.user.profile_image
      };
    }
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}

export default userReducer;