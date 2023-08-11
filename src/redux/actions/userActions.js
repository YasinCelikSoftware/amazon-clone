import {type} from '@testing-library/user-event/dist/type';
import * as actionTypes from './actionTypes';

export function setUser (user) {
  return {
    type: actionTypes.SET_USER,
    payload: user,
  };
}
