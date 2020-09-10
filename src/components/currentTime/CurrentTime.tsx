import moment from 'moment';
import React, { useEffect, useState } from 'react';

import './CurrentTime.scss';

export interface CurrentTimeProps {
    className?: string;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ className = '' }) => {
    const [currentTime, setCurrentTime] = useState<string>();

    useEffect(() => {
        const time = moment.parseZone(moment().format()).format('HH:mm z');
        setCurrentTime(time);
    });

    return (
        <div className={`CurrentTime ${className}`}>
            <span className="CurrentTime__text">{currentTime}</span>
        </div>
    );
};

export default CurrentTime;
