import React from 'react';

export interface LocationProps {
    className?: string;
}

const Location: React.FC<LocationProps> = ({ className = '' }) => {
    return (
        <span className={`Location ${className}`}>
           London
        </span>
    );
};

export default Location;
