import React from 'react';
import DailyForecast from '../../../dailyForecast/DailyForecast';
import Temperature from '../../common/temperature/Temperature';
import WeatherConditions from '../../common/weatherConditions/WeatherConditions';

import './DailyForecastItem.scss';

export interface DailyForecastItemProps {
    dailyForecast: DailyForecast;
}

const DailyForecastItem: React.FC<DailyForecastItemProps> = ({ dailyForecast }) => {
    const { day, temperature, condition, icon } = dailyForecast;
    return (
        <li className="DailyForecastItem">
            <span className="DailyForecastItem__day">{day}</span>
            <Temperature className="DailyForecastItem__temperature" temperature={temperature} />
            <WeatherConditions className="DailyForecastItem__condition" condition={condition} icon={icon} />
        </li>
    );
};

export default DailyForecastItem;
