import React from 'react';
import { navList } from '../assets/data/content';
import downloadIcon from '../assets/svg/download.svg';
import heartIcon from '../assets/svg/heart.svg';
import fibLogo from '../assets/svg/fibLogo.svg';
// import axios from '../lib/axios';

const Home = () => {
  // const downloadDetails = async (packageName: string) => {
  //   const d = new Date();
  //   const period = `2022-01-01:${d.getFullYear()}-${
  //     d.getMonth() + 1
  //   }-${d.getDate()}`;

  //   const res = await axios.get(
  //     `https://api.npmjs.org/downloads/point/${period}/${packageName}`,
  //   );
  //   console.log('period', res);
  //   return res.data.downloads;
  // };
  console.log();
  return (
    <div className="h-full">
      <div className="h-16  p-2 text-center font-bold  bg-gray">
        <div className="py-4">
          <a href="/" className="mx-3">
            Home
          </a>
          <a href="/" className="mx-3">
            Blogs
          </a>
          <a href="/" className="mx-3">
            About Us
          </a>
          <a href="/" className="mx-3">
            Contact Us
          </a>
        </div>
      </div>
      <div className="bg-gray mt-2 h-full">
        <div className="container mx-auto px-14 ">
          <div className="text-center gap-5 pt-8">
            <span className="flex justify-center">
              <img className="mr-10" src={fibLogo} alt="Not found" />
              <h1 className=" text-6xl font-bold mt-1">Fibonalabs</h1>
            </span>

            <h6 className="mt-5">
              A Quick setup to build your own application
            </h6>
          </div>
          <div className="py-4 ">
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-7">
              {navList.map((data) => {
                const desc = data.desc?.substring(0, 100).concat(' ...');
                // const downloads = downloadDetails(
                //   '@fibonalabs/create-fibonalabs-ui',
                // );
                return (
                  <a
                    href={data.href}
                    className="bg-white  rounded-md h-48 w-80 p-3 shadow-md"
                  >
                    <h3 className="text-2xl truncate">{data.name}</h3>
                    <p className="  mt-3">{desc}</p>
                    <div className="my-5">
                      <img
                        className="mr-2 inline"
                        src={downloadIcon}
                        alt="Not found"
                      />
                      <span>10</span>
                      <img
                        className="ml-5 inline"
                        src={heartIcon}
                        alt="Not found"
                      />
                      <span className="mr-5 ml-2">10</span>
                      {/* <a>Read more</a> */}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
