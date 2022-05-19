import { USER_LOGIN, PROFESSIONAL_INFO } from '../action/action';

const INITIAL_STATE = {
  state: '',
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      personal: action.payload,
    };
  case PROFESSIONAL_INFO:
    return {
      ...state,
      professional: action.infos,
    };
  default:
    return state;
  }
}

export default reducer;
