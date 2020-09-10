import React from 'react';
import DailyForecast from '../../../dailyForecast/DailyForecast';
import Temperature from '../../common/temperature/Temperature';
import WeatherConditions from '../../common/weatherConditions/WeatherConditions';

import './FutureForecastDay.scss';

export interface FutureForecastDayProps {
    forecast: DailyForecast;
}

const FutureForecastDay: React.FC<FutureForecastDayProps> = ({ forecast }) => {
    const { day, temperature, condition, icon } = forecast;
    return (
        <li className="FutureForecastDay">
            <span className="FutureForecastDay__day">{day}</span>
            <Temperature className="FutureForecastDay__temperature" temperature={temperature} />
            <WeatherConditions className="FutureForecastDay__condition" condition={condition} icon={icon} />
        </li>
    );
};

export default FutureForecastDay;
