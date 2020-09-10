import React, { useEffect, useState } from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../common/location/Location';
import CurrentTime from '../../currentTime/CurrentTime';
import Forecast from '../../../forecast/Forecast';

import './CurrentForecast.scss';

// TODO move this to forecast object
export const DEFAULT_LOCATION = 'London';

export interface CurrentForecastProps {
    forecast: Forecast | null;
}

const CurrentForecast: React.FC<CurrentForecastProps> = ({ forecast }) => {
    // TODO
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setIsLoading(forecast === null);
    }, [forecast]);

    const temperature = (forecast && forecast.currentTemperature) || 0;

    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" location={DEFAULT_LOCATION} />
            <CurrentTime />
            <Temperature className="CurrentForecast__temperature" temperature={temperature} />
        </section>
    );
};

export default CurrentForecast;
