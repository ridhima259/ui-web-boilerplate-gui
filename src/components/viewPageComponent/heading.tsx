import React from 'react';

type Head = {
  value: string;
};

const Heading: React.FC<Head> = ({ value }) => (
  <div>
    <h1 className="css-rqrjmr">{value}</h1>
  </div>
);

export default Heading;
