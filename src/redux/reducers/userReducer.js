import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer (state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.payload !== null ? {...action.payload} : null;

    default:
      return state;
  }
}
