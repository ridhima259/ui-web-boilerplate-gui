import React from 'react';

const headerHome = () => (
  <div className="h-18  p-2 text-right fixed w-full z-50">
    <div className="py-4 text-xs lg:text-xl">
      <a href="/viewpage" className="mx-3 px-4 py-2 headerText">
        Docs
      </a>
      <a
        href="/add-module"
        rel="noreferrer"
        className="mx-3 px-4 py-2 headerText"
      >
        Add Docs
      </a>
      <a
        href="https://www.fibonalabs.com/aboutus"
        className="mx-3  px-4 py-2 headerText"
      >
        About Us
      </a>
      <a
        href="https://www.fibonalabs.com/contactus"
        className="mx-3  px-4 py-2 headerText"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default headerHome;
