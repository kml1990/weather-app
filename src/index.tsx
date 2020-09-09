import { Container } from 'inversify';
import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from './App';
import { DependencyProvider } from './di/DependencyContext';
import DependencyService from './di/DependencyService';

import './index.scss';

const ROOT_ID = 'root';

const dependencyService = new DependencyService();

dependencyService
    .loadDependencies()
    .then((dependenciesContainer: Container) => {
        ReactDOM.render(
            <React.StrictMode>
                <DependencyProvider container={dependenciesContainer}>
                    <App />
                </DependencyProvider>
            </React.StrictMode>,
            document.getElementById(ROOT_ID),
        );
    })
    .catch(() => {
        console.error('Something went wrong');
    });
