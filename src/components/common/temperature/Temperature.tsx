import React from 'react';

export interface TemperatureProps {
    temperature: number;
}

const Temperature: React.FC<TemperatureProps> = ({ temperature }) => {
    return (
        <span className="Temperature">
           {temperature}
        </span>
    );
};

export default Temperature;
