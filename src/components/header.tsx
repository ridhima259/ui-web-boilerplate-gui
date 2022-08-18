import React from 'react';
import { Input } from 'antd';
// import fibLogo from '../assets/svg/image.svg';

type Head = {
  title: string;
  subtitle: string;
  showTitle: boolean;
  onTitleChanged: Function;
};

const Header: React.FC<Head> = ({
  title,
  subtitle,
  showTitle,
  onTitleChanged,
}) => (
  <div className="header h-18 text-black bg-headerbg shadow-4xl w-full fixed z-50 ">
    <div className="flex  px-5 gap-4 d-flex">
      {/* <img src={fibLogo} alt="No text" /> */}
      <div className="p-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <h5 className="text-sm">{subtitle}</h5>
      </div>
      {showTitle && (
        <div className="employee_details_box p-4">
          <h1 className="text-xl font-bold">
            Main Heading
            <span className="required-field"> *</span>
          </h1>
          <div className="input_area ml-2">
            <Input
              style={{ height: 30 }}
              placeholder="heading"
              onChange={(e) => {
                onTitleChanged(e.target.value);
              }}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);

export default Header;
