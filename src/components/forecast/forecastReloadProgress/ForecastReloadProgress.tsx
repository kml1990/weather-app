import React, { useEffect, useState } from 'react';
import ProgressBar from '../../common/progressBar/ProgressBar';

import './ForecastReloadProgress.scss';

export interface ForecastReloadProgressProps {
    trigger: any;
    reloadFrequencyInSeconds: number;
}

const ONE_SECOND_IN_MS = 1000;

const ForecastReloadProgress: React.FC<ForecastReloadProgressProps> = ({ trigger, reloadFrequencyInSeconds }) => {
    const [timer, setTimeer] = useState<number>(reloadFrequencyInSeconds);

    const resetTimer = () => {
        setTimeer(reloadFrequencyInSeconds);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeer(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1;
                }
                return 0;
            });
        }, ONE_SECOND_IN_MS);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        resetTimer();
    }, [trigger]);

    const progress = (timer / reloadFrequencyInSeconds) * 100;
    const text = `Reloading in ${timer}s`; // TODO

    return (
        <section className="ForecastReloadProgress">
            <span className="ForecastReloadProgress__text">{text}</span>
            <ProgressBar progress={progress} className="ForecastReloadProgress__bar" />
        </section>
    );
};

export default ForecastReloadProgress;
