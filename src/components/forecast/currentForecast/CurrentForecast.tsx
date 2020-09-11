import React from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../common/location/Location';
import CurrentTime from '../../currentTime/CurrentTime';
import Forecast from '../../../forecast/Forecast';
import appConfig from '../../../utils/settings/Config';

import './CurrentForecast.scss';

export interface CurrentForecastProps {
    forecast: Forecast | null;
}

const CurrentForecast: React.FC<CurrentForecastProps> = ({ forecast }) => {
    const currentTemperature = (forecast && forecast.currentTemperature) || 0;
    console.log(currentTemperature)

    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" location={appConfig.location.DEFAULT_LOCATION} />
            <CurrentTime />
            <Temperature className="CurrentForecast__temperature" temperature={currentTemperature} />
        </section>
    );
};

export default CurrentForecast;
