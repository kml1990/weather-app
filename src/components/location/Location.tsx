import React from 'react';
import useInjection from '../../di/DependencyHook';
import DependencyType from '../../di/DependencyType';
import LocationService from '../../location/LocationService';

export interface LocationProps {
    className?: string;
}

const Location: React.FC<LocationProps> = ({ className = '' }) => {
    const { currentLocation } = useInjection<LocationService>(DependencyType.LocationService);

    return <span className={`Location ${className}`}>{currentLocation}</span>;
};

export default Location;
