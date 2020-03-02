import { types } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.GET_POSTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
