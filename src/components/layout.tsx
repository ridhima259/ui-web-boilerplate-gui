import React from 'react';
import back from '../assets/svg/back-arrow.svg';
import checkIcon from '../assets/svg/tick.svg';

interface LayoutInterface {
  backButton: boolean;
  alert: boolean;
}
const Layout: React.FC<LayoutInterface> = ({ children, backButton, alert }) => (
  <>
    <div className="main py-24 px-4 md:px-10 lg:py-28 lg:px-10 xl:py-28 xl:py-20 bg-homebg w-full 2xl:h-screen">
      {alert ? (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed w-auto right-2 top-2"
          role="alert"
        >
          <span className="flex">
            <img src={checkIcon} alt="not found" />
            <strong className="font-bold ml-2">Copied to Clipboard</strong>
          </span>

          <span className="absolute top-0 bottom-0 right-0 px-4 py-3 ml-2" />
        </div>
      ) : null}
      {backButton ? (
        <a
          href="/"
          title="back"
          className=" p-5 absolute bg-blue-600 rounded-full top-24 left-3"
        >
          <img src={back} alt="text" />
        </a>
      ) : null}
      <div className="container mx-auto">{children}</div>
    </div>
  </>
);

export default Layout;
