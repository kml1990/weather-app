import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from './App';

import './index.scss';

const ROOT_ID = 'root';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById(ROOT_ID),
);
