import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware),
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose,
  ),
);

export default store;
