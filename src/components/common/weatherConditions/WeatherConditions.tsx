import React from 'react';
import appConfig from '../../../utils/settings/Config';

import './WeatherConditions.scss';

export interface WeatherConditionsProps {
    condition: string;
    icon: string;
    className?: string;
}

const WeatherConditions: React.FC<WeatherConditionsProps> = ({ condition, icon, className = '' }) => {
    return (
        <div className={`WeatherConditions ${className}`}>
            <img
                className="WeatherConditions__image"
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt={appConfig.texts.CONDITION_IMAGE_ALT_TEXT}
            />
            <span className="WeatherConditions__text">{condition}</span>
        </div>
    );
};

export default WeatherConditions;
