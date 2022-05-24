import React from 'react';
// import fibLogo from '../assets/svg/image.svg';

type Head = {
  title: string;
  subtitle: string;
};

const Header: React.FC<Head> = ({ title, subtitle }) => (
  <div className="header h-18 text-black bg-headerbg shadow-4xl w-full fixed z-50 ">
    <div className="flex  px-5 gap-4">
      {/* <img src={fibLogo} alt="No text" /> */}
      <div className="p-4">
        <h1 className="text-xl font-bold">{title}</h1>
        <h5 className="text-sm">{subtitle}</h5>
      </div>
    </div>
  </div>
);

export default Header;
