import React from 'react';

import './Card.scss';

export interface CardProps {
    // className?: string;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return <div className="Card">{children}</div>;
};

export default Card;
