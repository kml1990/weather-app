import React from 'react';

export interface LocationProps {
    location: string;
    className?: string;
}

const Location: React.FC<LocationProps> = ({ location, className = '' }) => {
    return <span className={`Location ${className}`}>{location}</span>;
};

export default Location;
