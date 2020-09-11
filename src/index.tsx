import { Container } from 'inversify';
import React from 'react';
import ReactDOM from 'react-dom';
import 'reflect-metadata';
import { DependencyProvider } from './di/DependencyContext';
import DependencyService from './di/DependencyService';
import appConfig from './utils/settings/Config';
import AppSettings from './utils/settings/AppSettings';
import App from './components/app/App';

import './index.scss';

const dependencyService = new DependencyService();

dependencyService
    .loadDependencies()
    .then((dependenciesContainer: Container) => {
        const appSettings = new AppSettings();
        appSettings.configureApp();

        ReactDOM.render(
            <DependencyProvider container={dependenciesContainer}>
                <App />
            </DependencyProvider>,
            document.getElementById(appConfig.misc.ROOT_ID),
        );
    })
    .catch((error: Error) => {
        console.error(appConfig.texts.UNABLE_TO_LOAD_APP, error.message);
    });
