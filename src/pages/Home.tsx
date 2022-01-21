import React from 'react';
import Header from '../components/header';
import logo from '../assets/svg/react.svg';
import Nodejs from '../assets/svg/nodejs.svg';
import fibLogo from '../assets/svg/image.svg';
import { navType, navList } from '../assets/data/content';
import Layout from '../components/layout';

const Home = () => {
  const Card = (details: navType) => {
    const { name, date, href } = details;
    console.log('data', name, date);
    return (
      <a className="flex flex-col md:flex-row mb-4 rounded-md" href={href}>
        <img
          className="bg-blue-600 p-5 flex-end"
          src={href.includes('backend') ? Nodejs : logo}
          alt="No text"
        />
        <div className="bg-white w-full  text-black p-3 gap-3">
          <p className="text-lg">{name}</p>
          <p className="text-sm text-grey">
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
        {navList.map((data) => (
          <Card name={data.name} href={data.href} date={data.date} />
        ))}
      </Layout>
    </div>
  );
};

export default Home;
