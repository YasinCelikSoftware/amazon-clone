import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function cartReducer (state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, {...action.payload}];

    case actionTypes.REMOVE_FROM_CART:
      let found = false;
      const updatedState = state.map (cartItem => {
        if (!found && cartItem.id === action.payload.id) {
          found = true;
          return null;
        }
        return cartItem;
      });

      var newState = updatedState.filter (cartItem => cartItem !== null);
      return newState;

    default:
      return state;
  }
}
