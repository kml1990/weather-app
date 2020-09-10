import React from 'react';
import FutureForecastDay from './FutureForecastDay';

import './FutureForecast.scss';
import DailyForecast from '../../../dailyForecast/DailyForecast';

export interface FutureForecastProps {
    dailyForecasts: DailyForecast[];
}

const FutureForecast: React.FC<FutureForecastProps> = ({ dailyForecasts }) => {
    const futureForecastDays = dailyForecasts.map((dailyForecast, index) => (
        <FutureForecastDay key={`${dailyForecast.day}-${index}`} forecast={dailyForecast} />
    ));

    return (
        <ul className="FutureForecast">
            {futureForecastDays}
        </ul>
    );
};

export default FutureForecast;
