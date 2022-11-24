import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { sendToVercelAnalytics, reportWebVitals } from './vitals';
import './root.css';
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(sendToVercelAnalytics);
