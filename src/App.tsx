import React, { useEffect, useState } from 'react';
import Card from './components/card/Card';
import useInjection from './di/DependencyHook';
import DependencyType from './di/DependencyType';
import ForecastService from './forecast/ForecastService';
import Forecast from './forecast/Forecast';
import CurrentForecast from './components/forecast/currentForecast/CurrentForecast';
import ForecastReloadProgress from './components/forecast/forecastReloadProgress/ForecastReloadProgress';
import FutureForecast from './components/forecast/futureForecast/FutureForecast';
import CardHeader from './components/card/CardHeader';
import CardBody from './components/card/CardBody';

import './App.scss';

// TODO change to 60 seconds
const ONE_SECOND_IN_MS = 1000;
const ONE_MINUTE_IN_S = 60;
const WHEATHER_RELOAD_FREQUENCY_IN_MS = ONE_SECOND_IN_MS * ONE_MINUTE_IN_S;

const App: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const [forecast, setForecast] = useState<Forecast | null>(null);

    const loadForecast = () => {
        forecastService.getForecast().then(results => {
            setForecast(results);
        });
    };

    useEffect(() => {
        if (!forecast) {
            loadForecast();
        }
        const interval = setInterval(() => {
            loadForecast();
        }, WHEATHER_RELOAD_FREQUENCY_IN_MS);
        return () => clearInterval(interval);
    }, []);

    const reloadFrequencyInSeconds = WHEATHER_RELOAD_FREQUENCY_IN_MS / ONE_SECOND_IN_MS;

    return (
        <div className="App">
            <Card>
                <CardHeader>
                    <CurrentForecast forecast={forecast} />
                    {forecast && (
                        <ForecastReloadProgress
                            trigger={forecast}
                            reloadFrequencyInSeconds={reloadFrequencyInSeconds}
                        />
                    )}
                </CardHeader>
                <CardBody>{forecast && <FutureForecast dailyForecasts={forecast.dailyForecasts} />}</CardBody>
            </Card>
        </div>
    );
};

export default App;
