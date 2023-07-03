import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import Meeting from './zmeeting/components/Meeting';
import store from './zmeeting/store';
const root = ReactDOM.createRoot(document.getElementById('meetingContainer'));

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <Meeting />
  </Provider>
</React.StrictMode>
);