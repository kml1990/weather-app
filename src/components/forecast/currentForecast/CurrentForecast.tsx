import React from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../location/Location';
import CurrentTime from '../../currentTime/CurrentTime';
import DependencyType from '../../../di/DependencyType';
import useInjection from '../../../di/DependencyHook';
import ForecastService from '../../../forecast/ForecastService';

import './CurrentForecast.scss';

export interface CurrentForecastProps {
    //className?: string;
}

const CurrentForecast: React.FC<CurrentForecastProps> = () => {
    const { currentTemperature } = useInjection<ForecastService>(DependencyType.ForecastService);

    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" />
            <CurrentTime />
            <Temperature temperature={currentTemperature} />
        </section>
    );
};

export default CurrentForecast;
