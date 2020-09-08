import React from 'react';
import FutureForecastDay from './FutureForecastDay';

import './FutureForecast.scss';

export interface ForecastDay { // TODO move 
    day: string; // TODO change
    temperature: number;
    condition: string;
}

const FutureForecast: React.FC = () => {
    const forecastForNextFiveDays: ForecastDay[] = [
        {
            day: 'MON',
            temperature: 12,
            condition: 'Sunny intervals',
        },
        {
            day: 'TUE',
            temperature: 10,
            condition: 'Sunny intervals',
        },
        {
            day: 'WED',
            temperature: 2,
            condition: 'Sunny intervals',
        },
        {
            day: 'THU',
            temperature: 22,
            condition: 'Sunny intervals',
        },
        {
            day: 'FRI',
            temperature: 11,
            condition: 'Sunny intervals',
        },
    ];

    const futureForecastDays = forecastForNextFiveDays.map((forecast: ForecastDay) => (
        <FutureForecastDay forecast={forecast} />
    ))

    return (
        <ul className="FutureForecast">
            {futureForecastDays}
        </ul>
    );
};

export default FutureForecast;
