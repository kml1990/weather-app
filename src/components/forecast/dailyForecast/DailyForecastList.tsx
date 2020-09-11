import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DailyForecastItem from './DailyForecastItem';
import DailyForecast from '../../../dailyForecast/DailyForecast';

import './DailyForecastList.scss';

export interface DailyForecastListProps {
    dailyForecasts: DailyForecast[];
}

const DailyForecastList: React.FC<DailyForecastListProps> = ({ dailyForecasts }) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (dailyForecasts.length === 0) {
            setShow(false);
            return;
        }
        setShow(true);
    }, [dailyForecasts]);

    const futureForecastDays = dailyForecasts.map((dailyForecast, index) => (
        <CSSTransition key={`${dailyForecast.day}-${index}`} in={show} timeout={500} classNames="DailyForecasts__item">
            <DailyForecastItem dailyForecast={dailyForecast} />
        </CSSTransition>
    ));

    return <ul className="DailyForecastList">{futureForecastDays}</ul>;
};

export default DailyForecastList;
