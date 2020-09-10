import React from 'react';

import './WeatherConditions.scss';

export interface WeatherConditionsProps {
    condition: string;
    icon: string;
    className?: string;
}

const CONDITION_IMAGE_ALT_TEXT = 'Weather Icon';

const WeatherConditions: React.FC<WeatherConditionsProps> = ({ condition, icon, className = '' }) => {
    return (
        <div className={`WeatherConditions ${className}`}>
            <img
                className="WeatherConditions__image"
                src={`http://openweathermap.org/img/wn/${icon}.png`}
                alt={CONDITION_IMAGE_ALT_TEXT}
            />
            <span className="WeatherConditions__text">{condition}</span>
        </div>
    );
};

export default  WeatherConditions;
