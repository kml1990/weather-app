import React from 'react';

export interface CurrentTimeProps {
    className?: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ className = '' }) => {
    return (
        <span className={`CurrentTime ${className}`}>
           18:36 GMT
        </span>
    );
};

export default CurrentTime;
