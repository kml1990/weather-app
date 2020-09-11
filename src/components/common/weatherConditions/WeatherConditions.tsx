import React from 'react';
import appConfig from '../../../utils/settings/Config';

import './WeatherConditions.scss';

export interface WeatherConditionsProps {
    condition: string;
    icon: string;
    className?: string;
}

const WeatherConditions: React.FC<WeatherConditionsProps> = ({ condition, icon, className = '' }) => {
    const imageSource = `${appConfig.api.IMAGE_BASE_URL}${icon}${appConfig.misc.ICON_EXT}`;
    return (
        <div className={`WeatherConditions ${className}`}>
            <img
                className="WeatherConditions__image"
                src={imageSource}
                alt={appConfig.texts.CONDITION_IMAGE_ALT_TEXT}
            />
            <span className="WeatherConditions__text">{condition}</span>
        </div>
    );
};

export default WeatherConditions;
