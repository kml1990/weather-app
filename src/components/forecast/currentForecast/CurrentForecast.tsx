import React, { useEffect, useState } from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../location/Location';
import CurrentTime from '../../currentTime/CurrentTime';
import Forecast from '../../../types/forecast/Forecast';

import './CurrentForecast.scss';

// TODO move this to forecast object
export const DEFAULT_LOCATION = 'London';

export interface CurrentForecastProps {
    forecast: Forecast | null;
}

const CurrentForecast: React.FC<CurrentForecastProps> = ({ forecast }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(forecast === null);
    }, [forecast]);

    console.log(isLoading)

    const temperature = (forecast && forecast.currentTemperature) || 0;

    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" location={DEFAULT_LOCATION} />
            <CurrentTime />
            <Temperature temperature={temperature} />
        </section>
    );
};

export default CurrentForecast;
