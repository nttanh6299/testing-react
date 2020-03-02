import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(
  createStore
);

export const store = createStoreWithMiddleware(RootReducer);
