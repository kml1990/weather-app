import React from 'react';
import ProgressBar from '../../common/progressBar/ProgressBar';

import './ForecastReloadProgress.scss'

export interface ForecastReloadProgressProps {
    // className?: string;
}

const ForecastReloadProgress: React.FC<ForecastReloadProgressProps> = () => {
    return (
        <section className="ForecastReloadProgress">
            <span className="ForecastReloadProgress__text">Reloading in 20s</span>
            <ProgressBar progress={80} className="ForecastReloadProgress__bar" />
        </section>
    );
};

export default ForecastReloadProgress;
