import { types } from './types';
import axios from 'axios';

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: types.GET_POSTS, payload: res.data });
  } catch (err) {}
};
