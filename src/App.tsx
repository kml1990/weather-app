import React, { useEffect, useState } from 'react';
import Card from './components/card/Card';
import useInjection from './di/DependencyHook';
import DependencyType from './di/DependencyType';
import ForecastService from './forecast/ForecastService';
import Forecast from './types/forecast/Forecast';
import CurrentForecast from './components/forecast/currentForecast/CurrentForecast';
import ForecastReloadProgress from './components/forecast/forecastReloadProgress/ForecastReloadProgress';
import FutureForecast from './components/forecast/futureForecast/FutureForecast';

import './App.scss';
import CardHeader from './components/card/CardHeader';
import CardBody from './components/card/CardBody';


const App: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const [forecast, setForecast] = useState<Forecast | null>(null);

    useEffect(() => {
        forecastService.getForecast().then(results => {
            setForecast(results);
        });
        // TODO Kill promise when unmounted
    }, [forecastService]);

    return (
        <div className="App">
            <Card>
                <CardHeader>
                    <CurrentForecast forecast={forecast} />
                    <ForecastReloadProgress />
                </CardHeader>
                <CardBody>{forecast && <FutureForecast dailyForecasts={forecast.dailyForecasts} />}</CardBody>
            </Card>
        </div>
    );
};

export default App;
