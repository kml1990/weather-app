import React from 'react';
import Temperature from '../../common/temperature/Temperature';
import Location from '../../location/Location';
import CurrentTime from '../../currentTime/CurrentTime';

import './CurrentForecast.scss';

export interface CurrentForecastProps {
    //className?: string;
}

const CurrentForecast: React.FC<CurrentForecastProps> = () => {
    return (
        <section className="CurrentForecast">
            <Location className="CurrentForecast__location" />
            <CurrentTime />
            <Temperature temperature={12} />
        </section>
    );
};

export default CurrentForecast;
