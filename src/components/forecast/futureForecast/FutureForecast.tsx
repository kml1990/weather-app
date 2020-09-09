import React, { useEffect } from 'react';
import FutureForecastDay from './FutureForecastDay';

import './FutureForecast.scss';
import useInjection from '../../../di/DependencyHook';
import ForecastService from '../../../forecast/ForecastService';
import DependencyType from '../../../di/DependencyType';

const FutureForecast: React.FC = () => {
    const forecastService = useInjection<ForecastService>(DependencyType.ForecastService);
    const forecastForNextFiveDays = [
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

    useEffect(() => {
        const dailyForecast = forecastService.forecast;
        console.log(dailyForecast)
    }, []);

    const futureForecastDays = forecastForNextFiveDays.map(forecast => (
        <FutureForecastDay key={forecast.day} forecast={forecast} />
    ));

    return (
        <ul className="FutureForecast">
            {futureForecastDays}
        </ul>
    );
};

export default FutureForecast;
