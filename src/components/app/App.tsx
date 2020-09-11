import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import useInjection from '../../di/DependencyHook';
import DependencyType from '../../di/DependencyType';
import ForecastService from '../../forecast/ForecastService';
import Forecast from '../../forecast/Forecast';
import CurrentForecast from '../forecast/currentForecast/CurrentForecast';
import ForecastReloadProgress from '../forecast/forecastReloadProgress/ForecastReloadProgress';
import DailyForecasts from '../forecast/dailyForecast/DailyForecastList';
import CardHeader from '../card/CardHeader';
import CardBody from '../card/CardBody';
import appConfig from '../../utils/settings/Config';

import './App.scss';

const App: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const [forecast, setForecast] = useState<Forecast | null>(null);

    const reloadFrequencyInSeconds =
        appConfig.timing.WEATHER_RELOAD_FREQUENCY_IN_MS / appConfig.timing.ONE_SECOND_IN_MS;

    const resetForecast = () => {
        setForecast(null);
    };

    const loadForecast = () => {
        forecastService.getForecast().then(results => {
            setForecast(results);
        });
    };

    useEffect(() => {
        if (forecast === null) {
            loadForecast();
        }
        const interval = setInterval(() => {
            resetForecast();
            loadForecast();
        }, appConfig.timing.WEATHER_RELOAD_FREQUENCY_IN_MS);
        return () => clearInterval(interval);
    }, []);

    const dailyForecasts = (forecast && forecast.dailyForecasts) || appConfig.misc.DEFAULT_DAILY_FORECAST;
    const currentTemperature = (forecast && forecast.currentTemperature) || appConfig.temperature.DEFAULT_TEMPERATURE;

    return (
        <div className="App">
            <Card>
                <CardHeader>
                    <CurrentForecast currentTemperature={currentTemperature} />
                    <ForecastReloadProgress trigger={forecast} reloadFrequencyInSeconds={reloadFrequencyInSeconds} />
                </CardHeader>
                <CardBody>
                    <DailyForecasts dailyForecasts={dailyForecasts} />
                </CardBody>
            </Card>
        </div>
    );
};

export default App;
