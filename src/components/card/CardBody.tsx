import React from 'react';

import './CardBody.scss';

const CardBody: React.FC = React.memo(({ children }) => {
    return <main className="CardBody">{children}</main>;
});

export default CardBody;
