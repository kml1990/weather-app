import React from 'react';

import './Card.scss';

const Card: React.FC = React.memo(({ children }) => {
    return <div className="Card">{children}</div>;
});

export default Card;
