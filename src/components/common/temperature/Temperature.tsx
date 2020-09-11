import React, { useEffect, useState } from 'react';
import appConfig from '../../../utils/settings/Config';

export interface TemperatureProps {
    temperature: number;
    className?: string;
}

const Temperature: React.FC<TemperatureProps> = ({ temperature, className = '' }) => {
    const [temperatureCounter, setTemperatureCounter] = useState<number>(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (temperatureCounter < temperature) {
                setTemperatureCounter(prevTime => prevTime + 1);
            }
        }, appConfig.timing.TEMPERATURE_COUNT_UP_SPEED_IN_MS);
        return () => clearTimeout(timeout);
    });

    const temperatureText = `${temperatureCounter} ${appConfig.temperature.CELCIUS_SYMBOL}`;

    return <span className={`Temperature ${className}`}>{temperatureText}</span>;
};

export default Temperature;
