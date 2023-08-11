import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer (state = initialState.user, action) {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
