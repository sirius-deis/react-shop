import UserActionTypes from './user.types';

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  error: null,
  token: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_START:
    case UserActionTypes.SIGN_OUT_START:
    case UserActionTypes.SIGN_UP_START:
      return { ...state, isLoading: true };
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.data.user,
        error: null,
        token: action.payload.token,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, isLoading: false, user: null, error: null, token: null };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return { ...state, isLoading: false, error: null };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return { ...state, isLoading: false, error: action.payload.message };
    default:
      return state;
  }
};

export default userReducer;
