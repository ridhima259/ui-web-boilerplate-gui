import React from 'react';
import fibLogo from '../assets/svg/image.svg';

type Head = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Head> = ({ title, subtitle }) => (
  <div className="header text-white bg-blue-600 m-h-30">
    <div>
      <div className="flex  px-5 gap-4">
        <img src={fibLogo} alt="No text" />
        <div className="p-8">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
