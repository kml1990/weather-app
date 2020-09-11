import React from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../common/location/Location';
import CurrentTime from '../../common/currentTime/CurrentTime';
import appConfig from '../../../utils/settings/Config';

import './CurrentForecast.scss';

export interface CurrentForecastProps {
    currentTemperature: number;
}

const CurrentForecast: React.FC<CurrentForecastProps> = ({ currentTemperature }) => {
    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" location={appConfig.location.DEFAULT_LOCATION} />
            <CurrentTime />
            <Temperature className="CurrentForecast__temperature" temperature={currentTemperature} />
        </section>
    );
};

export default CurrentForecast;
