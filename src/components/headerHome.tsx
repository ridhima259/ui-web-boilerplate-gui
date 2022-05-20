import React from 'react';

const headerHome = () => (
  <div className="h-18  p-2 text-center font-bold  bg-headerbg shadow-4xl fixed w-full">
    <div className="py-4 text-xs lg:text-xl">
      <a href="/" className="mx-3 lg:mx-5">
        Home
      </a>
      <a href="/" className="mx-3 lg:mx-5">
        Blogs
      </a>
      <a href="/" className="mx-3 lg:mx-5">
        About Us
      </a>
      <a href="/" className="mx-3 lg:mx-5">
        Contact Us
      </a>
    </div>
  </div>
);

export default headerHome;
