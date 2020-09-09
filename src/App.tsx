import React, { useEffect } from 'react';
import Card from './components/layout/card/Card';
import Content from './components/layout/content/Content';
import Header from './components/layout/header/Header';
import useInjection from './di/DependencyHook';
import DependencyType from './di/DependencyType';
import ForecastService from './forecast/ForecastService';

import './App.scss';

const App: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);

    useEffect(() => {
        forecastService.loadForecast();
    }, []);

    return (
        <div className="App">
            <Card>
                <Header />
                <Content />
            </Card>
        </div>
    );
};

export default App;
