import React from 'react';

import './CardHeader.scss';

export interface CardHeaderProps {
    className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => {
    return <header className={`CardHeader ${className}`}>{children}</header>;
};

export default CardHeader;
