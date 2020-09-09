import { Container } from 'inversify';
import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import App from './App';
import { DependencyProvider } from './di/DependencyContext';
import DependencyService from './di/DependencyService';

import './index.scss';
import AppSettings from './settings/AppSettings';

const ROOT_ID = 'root';

const dependencyService = new DependencyService();

dependencyService
    .loadDependencies()
    .then((dependenciesContainer: Container) => {
        const appSettings = new AppSettings();
        appSettings.configureApp();

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
