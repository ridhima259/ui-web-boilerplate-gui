import React from 'react';
import twitter from '../assets/svg/twitter.svg';
import facebook from '../assets/svg/facebook.svg';
import linkedin from '../assets/svg/linkedin.svg';
import youtube from '../assets/svg/youtube.svg';

const footer = () => (
  <div className="h-20 px-24 bg-black flex items-center justify-between">
    <div>
      <p className="text-white text-left font-light text-sm">
        All rights are reserved Fibonalabs 2020
      </p>
    </div>
    <div>
      <img
        className="ml-5 inline cursor-pointer"
        src={twitter}
        alt="Not found"
      />
      <img
        className="ml-5 inline cursor-pointer"
        src={facebook}
        alt="Not found"
      />
      <img
        className="ml-5 inline cursor-pointer"
        src={linkedin}
        alt="Not found"
      />
      <img
        className="ml-5 inline cursor-pointer"
        src={youtube}
        alt="Not found"
      />
    </div>
  </div>
);

export default footer;
