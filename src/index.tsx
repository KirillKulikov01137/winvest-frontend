import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./styles/GlobalStyle";
import './fonts.css';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle/>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
