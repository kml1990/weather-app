import React from 'react';
import { ForecastDay } from './FutureForecast';

import './FutureForecastDay.scss'

export interface FutureForecastDayProps {
    forecast: ForecastDay;
}

const FutureForecastDay: React.FC<FutureForecastDayProps> = ({ forecast }) => {
    const { day, temperature, condition } = forecast;
    return (
        <li className="FutureForecastDay">
            <span>{day}</span>
            <span>{temperature}</span>
            <span>{condition}</span>
        </li>
    );
};

export default FutureForecastDay;
