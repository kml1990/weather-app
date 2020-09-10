import React from 'react';

export interface TemperatureProps {
    temperature: number;
    className?: string;
}

const Temperature: React.FC<TemperatureProps> = ({ temperature, className = '' }) => {
    return (
        <span className={`Temperature ${className}`}>
           {temperature} &#8451;
        </span>
    );
};

export default Temperature;
