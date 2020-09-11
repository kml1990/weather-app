import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import DailyForecastItem from './DailyForecastItem';
import DailyForecast from '../../../dailyForecast/DailyForecast';
import appConfig from '../../../utils/settings/Config';

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

    const dailyForecastsItems = dailyForecasts.map((dailyForecast, index) => {
        const key = `${dailyForecast.day}-${index}`;
        return (
            <CSSTransition
                key={key}
                in={show}
                timeout={appConfig.timing.CSS_TRANSITION_DELAY}
                classNames="DailyForecastList__item"
            >
                <DailyForecastItem dailyForecast={dailyForecast} />
            </CSSTransition>
        );
    });

    return <ul className="DailyForecastList">{dailyForecastsItems}</ul>;
};

export default DailyForecastList;
