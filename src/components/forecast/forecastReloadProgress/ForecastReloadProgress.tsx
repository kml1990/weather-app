import React, { useEffect, useState } from 'react';
import ProgressBar from '../../common/progressBar/ProgressBar';

import './ForecastReloadProgress.scss';

export interface ForecastReloadProgressProps {
    trigger: any;
    reloadFrequencyInSeconds: number;
    // className?: string;
}

const ONE_SECOND_IN_MS = 1000;

const ForecastReloadProgress: React.FC<ForecastReloadProgressProps> = ({ trigger, reloadFrequencyInSeconds }) => {
    const [timer, setTimeer] = useState<number>(reloadFrequencyInSeconds);

    const resetTimer = () => {
        setTimeer(reloadFrequencyInSeconds);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer >= 0) {
                setTimeer(prevTime => prevTime - 1);
            }
        }, ONE_SECOND_IN_MS);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        resetTimer();
    }, [trigger]);

    const progress = (timer / reloadFrequencyInSeconds) * 100;
    console.log(progress)

    return (
        <section className="ForecastReloadProgress">
            <span className="ForecastReloadProgress__text">
                Reloading in {timer}s
            </span>
            <ProgressBar progress={progress} className="ForecastReloadProgress__bar" />
        </section>
    );
};

export default ForecastReloadProgress;
