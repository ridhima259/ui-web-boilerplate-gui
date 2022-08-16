import React from 'react';
import Gist from 'react-gist';

type Head = {
  value: string;
};

const Usage: React.FC<Head> = ({ value }) => (
  <div>
    <h1 className="css-rqrjmrr">Usage</h1>
    <Gist id={value} />
  </div>
);

export default Usage;
