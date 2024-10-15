import React from 'react';
import { Provider } from 'react-redux';
import store from './Store'; // Adjust the path if needed

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
