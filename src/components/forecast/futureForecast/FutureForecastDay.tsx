import React from 'react';

import './FutureForecastDay.scss'

export interface FutureForecastDayProps {
    forecast: any;
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
