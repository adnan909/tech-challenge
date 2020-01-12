import React from 'react';
import AppNavigator from './src/navigation/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import vehicleReducer from './src/redux/reducers/vehicleReducer';

const createStoreMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreMiddleware(vehicleReducer)

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

