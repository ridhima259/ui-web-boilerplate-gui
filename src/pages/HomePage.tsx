import React from 'react';
import Header from '../components/header';
// import logo from '../assets/svg/react.svg';
// import Nodejs from '../assets/svg/nodejs.svg';
import fibLogo from '../assets/svg/image.svg';
import { navType, navList } from '../assets/data/content';
import Layout from '../components/layout';

const Home = () => {
  const Card = (details: navType) => {
    const { name, date, href } = details;
    console.log('data', name, date);
    return (
      <a className="flex flex-col md:flex-row mb-4 mx-3 " href={href}>
        {/* <img
          className="bg-blue-600 p-5 flex-end"
          src={href.includes('backend') ? Nodejs : logo}
          alt="No text"
        /> */}
        <div className="bg-white w-full  text-black p-7 gap-3 rounded-lg">
          <p className="text-md font-bold">{name}</p>
          <p className="text-sm inline-block truncate">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam vitae
            commodi ex in, dolore placeat soluta at doloribus nostrum sed
            voluptatem, odit consequuntur vel suscipit veniam dolorem officia
            repudiandae maxime.
          </p>
          <p className="text-sm text-grey py-3">
            Created in &nbsp;
            {date}
          </p>
        </div>
      </a>
    );
  };
  return (
    <div className="">
      <Header title="Pure Components" subtitle="">
        <img src={fibLogo} alt="No text" />
      </Header>
      <Layout backButton={false} alert={false}>
        <div className="card grid grid-cols-3 gap-4">
          {navList.map((data) => (
            <Card name={data.name} href={data.href} date={data.date} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
