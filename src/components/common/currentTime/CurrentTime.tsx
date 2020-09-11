import moment from 'moment';
import React, { useEffect, useState } from 'react';

import './CurrentTime.scss';

const CurrentTime: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<string>();

    useEffect(() => {
        const time = moment.parseZone(moment().format()).format('HH:mm z');
        setCurrentTime(time);
    });

    return (
        <div className="CurrentTime">
            <span className="CurrentTime__text">{currentTime}</span>
        </div>
    );
};

export default CurrentTime;
