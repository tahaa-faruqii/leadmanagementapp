import {ADD_ITEM, REMOVE_ITEM} from '../Actiontypes';

export const addItemToCart = data => ({
  type: ADD_ITEM,
  payload: data,
});

export const RemoveItemFromCart = index => ({
  type: REMOVE_ITEM,
  payload: index,
});
