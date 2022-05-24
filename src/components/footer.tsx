import React from 'react';
import twitter from '../assets/svg/twitter.svg';
import facebook from '../assets/svg/facebook.svg';
import linkedin from '../assets/svg/linkedin.svg';
import youtube from '../assets/svg/youtube.svg';

const footer = () => (
  <div className="h-20 px-8 md:px-14 lg:px-14 xl:px-24  bg-black flex items-center justify-between w-full">
    <div>
      <p className="text-white text-left font-light text-xs lg:text-sm xl:text-lg">
        All rights are reserved Fibonalabs 2020
      </p>
    </div>
    <div>
      <a href="https://twitter.com/fibonalabs" target="_blank" rel="noreferrer">
        <img
          className="ml-2 w-4 lg:ml-5 xl:w-6 inline cursor-pointer"
          src={twitter}
          alt="Not found"
        />
      </a>
      <a
        href="https://www.facebook.com/fibonalabs"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="ml-2 w-4 lg:ml-5 xl:w-6 inline cursor-pointer"
          src={facebook}
          alt="Not found"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/fibonalabs/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="ml-2 w-4 lg:ml-5 xl:w-6 inline cursor-pointer"
          src={linkedin}
          alt="Not found"
        />
      </a>

      <a
        href="https://www.youtube.com/channel/UCkJDB2uoWVUlGN8Jp27PBtg"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="ml-2 w-4 lg:ml-5 xl:w-6 inline cursor-pointer"
          src={youtube}
          alt="Not found"
        />
      </a>
    </div>
  </div>
);

export default footer;
