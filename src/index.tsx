import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from "./styles/GlobalStyle";
import './fonts.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <GlobalStyle/>
            <Router>
                <App/>
            </Router>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
