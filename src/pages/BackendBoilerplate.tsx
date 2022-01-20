import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import Header from '../components/header';
import Layout from '../components/layout';
import nestIcon from '../assets/svg/nestjs.svg';
import copy from '../assets/svg/copy.png';
import helpIcon from '../assets/svg/guide.svg';
import helpIcon2 from '../assets/svg/guide2.svg';
import Nodejs from '../assets/svg/nodejs.svg';
import { title } from '../assets/data/content';

const BackendBoilerPlate = () => {
  const [alert, showAlert] = useState(false);
  const active = [0];
  const url = 'git clone https://github.com/Fibonalabs-Developers/be-nodejs-boilerplate.git';

  const copyUrl = (val: string) => {
    showAlert(true);
    setTimeout(() => {
      showAlert(false);
    }, 2000);
    navigator.clipboard.writeText(val);
  };
  const Card = (props: any) => {
    const { val, children } = props;
    const { name, desc } = props;

    return (
      <div className="flex flex-col items-center">
        <button
          type="button"
          className={
            active.includes(val)
              ? 'p-2 border-solid border-2  rounded-md  shadow-md bg-blue-600 h-48 w-64 relative'
              : 'p-2 border-solid border-2  rounded-md  shadow-md h-48 w-64 relative bg-white'
          }
        >
          <ReactTooltip
            id={name}
            data-multiline
            effect="solid"
            className="w-96"
          >
            <span>{desc}</span>
          </ReactTooltip>
          <img
            data-tip
            data-for={name}
            src={active.includes(val) ? helpIcon : helpIcon2}
            alt="Not found"
            className="absolute top-5 right-5 "
          />

          {children}
          <span className={active.includes(val) ? 'text-white mt-2' : 'mt-2'}>
            {name}
          </span>
        </button>
      </div>
    );
  };
  console.log('test');
  return (
    <div>
      <Header
        title="Backend NodeJS Boilerplate"
        subtitle="Easiest way to setup your backend"
      >
        <img src={Nodejs} alt="Not found" />
      </Header>

      <Layout backButton alert={alert}>
        <div className="flex flex-col md:flex-row gap-5">
          <Card
            val={1}
            name="Nestjs"
            //   func={changeFramework}
            desc={title}
          >
            <img src={nestIcon} alt="Not found" className="ml-14" />
          </Card>
        </div>
        <div className="w-full mt-11">
          <h2 className="text-lg ">Command</h2>
          <div className="flex w-full mt-3 ">
            <input
              className="my-5 mr-5 rounded-sm bg-blue-600 text-white pl-2 w-full h-8 "
              value={url}
              disabled
            />

            <button
              type="button"
              onClick={() => copyUrl(url)}
              title="Copy command"
            >
              <img src={copy} alt="text" />
            </button>
          </div>
          <ul className="text-lg list-disc ml-5">
            {' '}
            <li>
              Clone this project by running the above command in your terminal
            </li>
            <li>
              Run npm install in the project directory to install the packages.
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default BackendBoilerPlate;
