import React from 'react';
import FutureForecast from '../../forecast/futureForecast/FutureForecast';

import './Content.scss';

export interface ContentProps {
    // className?: string;
}

const Content: React.FC<ContentProps> = () => {
    return (
        <main className="Content">
            <FutureForecast />
        </main>
    );
};

export default Content;
