import React from 'react';
import CurrentForecast from '../../forecast/currentForecast/CurrentForecast';
import ForecastReloadProgress from '../../forecast/forecastReloadProgress/ForecastReloadProgress';

import './Header.scss';

export interface HeaderProps {
    //className?: string;
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="Header">
            <CurrentForecast />
            <ForecastReloadProgress />
        </header>
    );
};

export default Header;
