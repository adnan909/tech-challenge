import React from 'react';
import AppNavigator from './src/navigation/index';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

export default function App() {
  return (
    <AppNavigator />
  );
}

