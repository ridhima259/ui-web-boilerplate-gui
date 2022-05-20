import React from 'react';
// import Header from '../components/header';
import Header from '../components/headerHome';
// import logo from '../assets/svg/react.svg';
// import Nodejs from '../assets/svg/nodejs.svg';
// import fibLogo from '../assets/svg/image.svg';
import { navType, navList } from '../assets/data/content';
import Layout from '../components/layout';
import downloadIcon from '../assets/svg/download.svg';
import heartIcon from '../assets/svg/heart.svg';
import arrowRight from '../assets/svg/arrow-right.svg';
import fibLogo from '../assets/svg/fibLogo.svg';
import Footer from '../components/footer';

const Home = () => {
  const Card = (details: navType) => {
    const {
      name, date, href, desc,
    } = details;
    console.log('data', name, date);
    return (
      <a
        className="flex flex-col md:flex-row mb-4 mx-3 hover:shadow-3xl"
        href={href}
      >
        {/* <img
          className="bg-blue-600 p-5 flex-end"
          src={href.includes('backend') ? Nodejs : logo}
          alt="No text"
        /> */}
        <div className="bg-white w-full  text-black p-7 gap-3 rounded-lg">
          <p className="text-md font-extrabold truncate">{name}</p>
          {/* <p className="text-sm inline-block w-80 truncate">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam vitae
            commodi ex in, dolore placeat soluta at doloribus nostrum sed
            voluptatem, odit consequuntur vel suscipit veniam dolorem officia
            repudiandae maxime.
          </p> */}
          <p className=" text-sm text-grey py-0 mt-4 truncate">{desc}</p>
          <p className="text-sm text-grey py-0">
            Created in &nbsp;
            {date}
          </p>
          <div className="mt-5 flex justify-between">
            <div>
              <img
                className="mr-2 inline"
                src={downloadIcon}
                alt="Not found"
              />
              <span>10</span>
              <img
                className="ml-5  inline"
                src={heartIcon}
                alt="Not found"
              />
              <span className=" ml-2  ">10</span>
            </div>
            <div>
              <a href={href} className="text-bluetext text-right text-sm ml-0">
                Read more
                <img className="ml-2 inline" src={arrowRight} alt="Not found" />
              </a>
            </div>
          </div>
        </div>
      </a>
    );
  };
  return (
    <div className="w-full">
      <Header />
      {/* <Header title="Pure Components" subtitle="">
        <img src={fibLogo} alt="No text" />
      </Header> */}
      <Layout backButton={false} alert={false}>
        <div className="text-center gap-5 pb-10">
          <span className="flex justify-center">
            <img
              className="mr-4 w-10 lg:mr-10 w-12"
              src={fibLogo}
              alt="Not found"
            />
            <h1 className="text-4xl mt-4 lg:text-6xl font-extrabold mt-1">
              Fibonalabs
            </h1>
          </span>

          <h6 className="text-md font-light mt-3">
            A Quick setup to build your own application
          </h6>
        </div>
        <div className="card grid grid-cols-1 xl:grid-cols-3 gap-1 lg:grid-cols-3 md:grid-cols-2">
          {navList.map((data) => (
            <Card
              name={data.name}
              href={data.href}
              date={data.date}
              desc={data.desc}
            />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
