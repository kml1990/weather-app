import moment from 'moment';
import React, { useEffect, useState } from 'react';

export interface CurrentTimeProps {
    className?: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ className = '' }) => {
    const [currentTime, setCurrentTime] = useState<string>();

    useEffect(() => {
        const time = moment.parseZone(moment().format()).format('HH:mm z');
        setCurrentTime(time);
    }, []);

    return (
        <span className={`CurrentTime ${className}`}>
           {currentTime}
        </span>
    );
};

export default CurrentTime;
