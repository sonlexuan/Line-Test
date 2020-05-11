import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import * as reducers from './reducers';
import rootSaga from './sagas';

const combinedReducers = combineReducers(reducers);

const rootReducer = (state, action) => {
  const reducedState = combinedReducers(state, action);
  return reducedState;
};

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

export default store;
