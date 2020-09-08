import React from 'react';

export interface ProgressBarProps {
    progress: number;
    className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className = '' }) => {
    return (
        <span className={`ProgressBar ${className}`}>
            {progress}
        </span>
    );
};

export default ProgressBar;
