import React from 'react';

type Head = {
  value: string;
};

const Description: React.FC<Head> = ({ value }) => (
  <div className="css-ngwsh7">{value}</div>
);

export default Description;
