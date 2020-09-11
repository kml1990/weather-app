import React, { useEffect, useState } from 'react';
import appConfig from '../../../utils/settings/Config';
import ProgressBar from '../../common/progressBar/ProgressBar';

import './ForecastReloadProgress.scss';

export interface ForecastReloadProgressProps {
    trigger: any;
    reloadFrequencyInSeconds: number;
}

const ForecastReloadProgress: React.FC<ForecastReloadProgressProps> = ({ trigger, reloadFrequencyInSeconds }) => {
    const [timer, setTimer] = useState<number>(reloadFrequencyInSeconds);

    const resetTimer = () => {
        setTimer(reloadFrequencyInSeconds);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                }
                return 0;
            });
        }, appConfig.timing.ONE_SECOND_IN_MS);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        resetTimer();
    }, [trigger]);

    const progress = (timer / reloadFrequencyInSeconds) * 100;
    const text = `${appConfig.progress.PROGRESS_MESSAGE} ${timer}${appConfig.progress.PROGRESS_UNIT}`;

    return (
        <section className="ForecastReloadProgress">
            <span className="ForecastReloadProgress__text">{text}</span>
            <ProgressBar progress={progress} className="ForecastReloadProgress__bar" />
        </section>
    );
};

export default ForecastReloadProgress;
