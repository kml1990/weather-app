import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import FutureForecastDay from './FutureForecastDay';
import DailyForecast from '../../../dailyForecast/DailyForecast';

import './FutureForecast.scss';

export interface FutureForecastProps {
    dailyForecasts: DailyForecast[];
}

const FutureForecast: React.FC<FutureForecastProps> = ({ dailyForecasts }) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (dailyForecasts.length === 0) {
            setShow(false);
            return;
        }
        setShow(true);
    }, [dailyForecasts]);

    const futureForecastDays = dailyForecasts.map((dailyForecast, index) => (
        <CSSTransition key={`${dailyForecast.day}-${index}`} in={show} timeout={500} classNames="FutureForecast__item">
            <FutureForecastDay forecast={dailyForecast} />
        </CSSTransition>
    ));

    return  <ul className="FutureForecast">{futureForecastDays}</ul>;
};

export default FutureForecast;
