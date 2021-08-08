import React from 'react';
import ReactDOM from 'react-dom';
//import styles from './css/style.css';

import { ThemeProvider } from "./contexts/Theme";

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'));
