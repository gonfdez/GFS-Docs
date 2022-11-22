import React from 'react';
import ReactDOM from 'react-dom';
import './root.css';
import App from './App';
import { sendToVercelAnalytics, reportWebVitals } from './vitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
