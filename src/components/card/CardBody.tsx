import React from 'react';

import './CardBody.scss';

export interface CardBodyProps {
    className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ className = '', children }) => {
    return <main className={`CardBody ${className}`}>{children}</main>;
};

export default CardBody;
