import React from 'react';

import './ProgressBar.scss';

export interface ProgressBarProps {
    progress: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
    return (
        <span className={`ProgressBar ${className}`}>
            <span className="ProgressBar__rail" style={{ width: `${progress}%` }}>
                <span className="ProgressBar__bar" />
            </span>
        </span>
    );
};

export default ProgressBar;
