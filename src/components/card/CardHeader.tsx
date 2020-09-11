import React from 'react';

import './CardHeader.scss';

const CardHeader: React.FC = React.memo(({ children }) => {
    return <header className="CardHeader">{children}</header>;
});

export default CardHeader;
