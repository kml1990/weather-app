import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import useInjection from '../../di/DependencyHook';
import DependencyType from '../../di/DependencyType';
import ForecastService from '../../forecast/ForecastService';
import Forecast from '../../forecast/Forecast';
import CurrentForecast from '../forecast/currentForecast/CurrentForecast';
import ForecastReloadProgress from '../forecast/forecastReloadProgress/ForecastReloadProgress';
import FutureForecast from '../forecast/futureForecast/FutureForecast';
import CardHeader from '../card/CardHeader';
import CardBody from '../card/CardBody';
import appConfig from '../../utils/settings/Config';

import './App.scss';

const App: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const [forecast, setForecast] = useState<Forecast>(forecastService.forecast);
    const dailyForecasts = (forecast && forecast.dailyForecasts) || [];

    const reloadFrequencyInSeconds =
        appConfig.timing.WEATHER_RELOAD_FREQUENCY_IN_MS / appConfig.timing.ONE_SECOND_IN_MS;

    const loadForecast = () => {
        forecastService.getForecast().then(results => {
            setForecast(results);
        });
    };

    useEffect(() => {
        if (forecast.currentTemperature === 0) {
            loadForecast();
        }
        const interval = setInterval(() => {
            loadForecast();
        }, appConfig.timing.WEATHER_RELOAD_FREQUENCY_IN_MS);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="App">
            <Card>
                <CardHeader>
                    <CurrentForecast forecast={forecast} />
                    <ForecastReloadProgress trigger={forecast} reloadFrequencyInSeconds={reloadFrequencyInSeconds} />
                </CardHeader>
                <CardBody>
                    <FutureForecast dailyForecasts={dailyForecasts} />
                </CardBody>
            </Card>
        </div>
    );
};

export default App;
