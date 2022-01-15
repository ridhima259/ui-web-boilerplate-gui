import React, { useState, useRef, useEffect } from 'react';
import cra from '../assets/svg/cra.svg';
import next from '../assets/svg/next.svg';
import materialUI from '../assets/svg/materialUI.svg';
import tailwind from '../assets/svg/tailwindcss.svg';
import antd from '../assets/svg/antd.png';
import logo from '../assets/svg/react.svg';
import copy from '../assets/svg/copy.png';

const HomePage = () => {
  const [framework, setFramework] = useState(0);
  const [uiKit, setUiKit] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [gitUrl, setGitUrl] = useState('');
  const [active, setActive] = useState([0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const changeFramework = (val: number) => {
    setGitUrl('');
    setFramework(val);
    let temp = active;
    temp = temp.filter((ele) => ele !== 1 && ele !== 2);
    temp.push(val);
    setActive(temp);
  };

  const changeUikit = (val: number) => {
    setGitUrl('');
    setUiKit(val);
    let temp = active;
    temp = temp.filter((ele) => ![3, 4, 5].includes(ele));
    temp.push(val);
    setActive(temp);
  };
  const copyUrl = (val: string) => {
    navigator.clipboard.writeText(val);
  };
  const Card = (props: any) => {
    const { val, func, children } = props;
    const { name } = props;

    return (
      <div className="flex flex-col items-center">
        <button
          type="button"
          className="p-2 border-solid border-2  rounded-md hover:animate-bounce shadow-md w-36 "
          style={
            active.includes(val)
              ? {
                  backgroundColor: '#fff2e3',
                  border: 'solid 3px #fadcbb',
                }
              : {}
          }
          onClick={() => func(val)}
        >
          {children}
        </button>
        <span className="mt-2">{name}</span>
      </div>
    );
  };
  const checkUiKit = (text: string): string => {
    let url = text;
    switch (uiKit) {
      case 5:
        url += ' --uikit antdesign';
        break;
      case 4:
        url += ' --uikit materialui';
        break;
      case 3:
        url += ' --uikit tailwindcss';
        break;

      default:
        break;
    }
    return url;
  };
  const onSubmit = () => {
    let url = 'npx @fibonalabs/create-fibonalabs-ui@latest --projectname ';
    url += projectName;
    url = checkUiKit(url);

    switch (framework) {
      case 1:
        url += ' --framework cra';
        break;
      case 2:
        url += ' --framework nextjs';
        break;
      default:
        break;
    }

    copyUrl(url);
    setGitUrl(url);
  };

  useEffect(() => {
    const divEle = scrollRef.current;
    divEle?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [gitUrl]);
  return (
    <>
      <div className="header text-white bg-black h-30">
        <div>
          <div className="flex  px-10">
            <img src={logo} alt="text" />
            <div className="ml-2 p-8">
              <h1 className="text-3xl font-bold">React BoilerPlate</h1>
              <h5>Starting point for your React Project</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="main py-5 px-20 bg-cream">
        <div className="container mx-auto">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold my-3">Select the BoilerPlate</h2>
            <ol className="list-decimal ml-5 grid grid-cols-1 gap-5">
              <li className="text-lg ">
                Choose The Framework
                <div className=" flex flex-col  md:flex-row gap-10 mt-3 ">
                  <Card val={1} name="CRA" func={changeFramework}>
                    <img src={cra} alt="text" title="CRA" />
                  </Card>
                  <Card val={2} name="Nextjs" func={changeFramework}>
                    <img src={next} alt="text" title="CRA" />
                  </Card>
                </div>
              </li>
              <li className="text-lg ">
                Choose the UI Kit
                <div className="flex flex-col md:flex-row gap-10 mt-3 ">
                  <Card val={3} name="Tailwind" func={changeUikit}>
                    <img src={tailwind} alt="text" title="CRA" />
                  </Card>
                  <Card val={4} name="Material UI" func={changeUikit}>
                    <img src={materialUI} alt="text" title="CRA" />
                  </Card>
                  <Card val={5} name="Antd" func={changeUikit}>
                    <img
                      src={antd}
                      alt="text"
                      title="CRA"
                      height="78px"
                      width="100px"
                      className="ml-3"
                    />
                  </Card>
                </div>
              </li>
              <li className="text-lg">
                <div className="flex flex-col">
                  Enter Project Name
                  <input
                    className="my-5 border-solid border-2 pl-2 w-96 h-8"
                    placeholder="Project name"
                    value={projectName}
                    onChange={(e) => {
                      setProjectName(e.target.value);
                    }}
                  />
                </div>
              </li>
            </ol>
            <button
              className="mt-3 rounded-sm w-100 text-white bg-black p-1 w-20 "
              type="submit"
              onClick={() => onSubmit()}
              disabled={uiKit === 0 || framework === 0 || projectName === ''}
            >
              Submit
            </button>
            <div className="flex gap-5" ref={scrollRef}>
              {gitUrl !== '' ? (
                <>
                  <input
                    className="my-5  rounded-sm bg-black text-white pl-2 w-96 h-8 "
                    value={gitUrl}
                    disabled
                  />

                  <button
                    type="button"
                    onClick={() => copyUrl(gitUrl)}
                    title="Copy command"
                  >
                    <img src={copy} alt="text" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
