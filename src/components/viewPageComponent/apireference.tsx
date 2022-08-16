import React from 'react';

type Head = {
  value: string;
};

const ApiReference: React.FC<Head> = ({ value }) => (
  <div>
    <h1 className="css-rqrjmrr">Api Reference</h1>
    <div dangerouslySetInnerHTML={{ __html: value }} />
  </div>
);

export default ApiReference;
