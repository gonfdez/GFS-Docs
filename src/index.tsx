import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { sendToVercelAnalytics, reportWebVitals } from './vitals';
import './root.css';
import 'animate.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);

reportWebVitals(sendToVercelAnalytics);
