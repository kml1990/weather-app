import React, { useEffect, useState } from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../location/Location';
import CurrentTime from '../../currentTime/CurrentTime';
import DependencyType from '../../../di/DependencyType';
import useInjection from '../../../di/DependencyHook';
import ForecastService from '../../../forecast/ForecastService';

import './CurrentForecast.scss';
import Forecast from '../../../types/forecast/Forecast';

export const DEFAULT_LOCATION = 'London';

const CurrentForecast: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const [forecast, setForecast] = useState<Forecast | null>();

    useEffect(() => {
        // TODO move to app
        console.log(forecastService.forecast)
        setForecast(forecastService.forecast);
    }, [forecastService]);

    if (!forecast) {
        return null;
    }

    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" location={DEFAULT_LOCATION} />
            <CurrentTime />
            <Temperature temperature={forecast.currentTemperature} />
        </section>
    );
};

export default CurrentForecast;
