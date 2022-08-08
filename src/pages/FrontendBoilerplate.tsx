import React, { useEffect, useRef, useState } from 'react';
import Steps, { Step } from 'rc-steps';
import ReactTooltip from 'react-tooltip';
import cra from '../assets/svg/react-2.svg';
import nextIcon from '../assets/svg/next.svg';
import materialUI from '../assets/svg/materialUI.svg';
import tailwind from '../assets/svg/tailwindcss.svg';
import antd from '../assets/svg/antd.png';
import copy from '../assets/svg/copy.png';
import helpIcon from '../assets/svg/guide.svg';
import helpIcon2 from '../assets/svg/guide2.svg';
import logo from '../assets/svg/react.svg';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import { frameworkContent, uiKitContent } from '../assets/data/content';
import Layout from '../components/layout';
import Header from '../components/header';

const BoilerPlate = () => {
  const [framework, setFramework] = useState(0);
  const [uiKit, setUiKit] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [gitUrl, setGitUrl] = useState('');
  const [active, setActive] = useState([0]);
  const [step, setStep] = useState(0);
  const [alert, showAlert] = useState(false);

  const frameWorkRef = useRef<HTMLDivElement>(null);
  const uiKitRef = useRef<HTMLDivElement>(null);
  const boilerplateRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const changeFramework = (val: number) => {
    setFramework(val);
    setGitUrl('');
    let temp = active;
    temp = temp.filter((ele) => ele !== 1 && ele !== 2);
    temp.push(val);
    setActive(temp);
    setStep(1);
    boilerplateRef.current?.scrollTo({
      behavior: 'smooth',
      top: uiKitRef.current?.offsetTop && uiKitRef.current?.offsetTop - 400,
    });
  };

  const changeUikit = (val: number) => {
    setUiKit(val);
    setGitUrl('');
    let temp = active;
    temp = temp.filter((ele) => ![3, 4, 5].includes(ele));
    temp.push(val);
    setActive(temp);
    setStep(2);
    boilerplateRef.current?.scrollTo({
      behavior: 'smooth',
      top: projectRef.current?.offsetTop && projectRef.current?.offsetTop - 300,
    });
  };

  const copyUrl = (val: string) => {
    showAlert(true);
    setTimeout(() => {
      showAlert(false);
    }, 2000);
    navigator.clipboard.writeText(val);
  };
  const stepChange = (e: number) => {
    let top;

    if (e === 0) {
      console.log('frame', frameWorkRef.current?.offsetTop);
      top = boilerplateRef.current?.offsetTop
        ? boilerplateRef.current?.offsetTop - 300
        : 0;
    } else if (e === 1) {
      top = uiKitRef.current?.offsetTop ? uiKitRef.current?.offsetTop - 300 : 0;
    } else if (e === 2) {
      top = projectRef.current?.offsetTop
        ? projectRef.current?.offsetTop - 300
        : 0;
    } else {
      top = projectRef.current?.offsetTop
        ? projectRef.current?.offsetTop + 100
        : 0;
    }
    setStep(e);
    boilerplateRef.current?.scrollTo({
      behavior: 'smooth',
      top,
    });
  };
  const Card = (props: any) => {
    const { val, func, children } = props;
    const { name, desc } = props;
    return (
      <div className="flex flex-col items-center  ">
        <button
          type="button"
          className={
            active.includes(val)
              ? 'p-2 border-solid border-2  rounded-md  shadow-md bg-blue-600 h-48 w-64 relative'
              : 'p-2 border-solid border-2  rounded-md  shadow-md h-48 w-64 relative bg-white'
          }
          onClick={() => func(val)}
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
    url += projectName.toLowerCase().replace(' ', '-');
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

    setGitUrl(url);
  };
  useEffect(() => {
    console.log('use effect');
    const top = projectRef.current?.offsetTop
      ? projectRef.current?.offsetTop + 200
      : 0;
    if (gitUrl !== '') {
      boilerplateRef.current?.scrollTo({
        behavior: 'smooth',
        top,
      });
      setStep(3);
    }
  }, [gitUrl]);

  const Framework = () => (
    <div ref={frameWorkRef}>
      <h2 className="text-lg mt-3">
        What will be the framework to start your project?
      </h2>
      {/* {frameworkContent.map((index: number, data: number) => {
        console.log('text', index, data);
        return <></>;
      })} */}
      <div className=" flex flex-col  md:flex-row gap-10 mt-3  ">
        <Card
          val={1}
          name="CRA"
          func={changeFramework}
          desc={frameworkContent[1].desc}
        >
          <img src={cra} alt="text" className="ml-14" />
        </Card>
        <Card
          val={2}
          name="Nextjs"
          func={changeFramework}
          desc={frameworkContent[2].desc}
        >
          <img src={nextIcon} alt="text" className="ml-14" />
        </Card>
      </div>
    </div>
  );

  const UiKit = () => (
    <div ref={uiKitRef} className="mt-11">
      <h2 className="text-lg ">
        What would be the best UI Kit for your project?
      </h2>
      <div className="flex flex-col md:flex-row gap-10 mt-3 ">
        <Card
          val={3}
          name="Tailwind"
          func={changeUikit}
          desc={uiKitContent[3].desc}
        >
          <img src={tailwind} alt="text" className="ml-14" />
        </Card>
        <Card
          val={4}
          name="Material UI"
          func={changeUikit}
          desc={uiKitContent[4].desc}
        >
          <img src={materialUI} alt="text" className="ml-14" />
        </Card>
        <Card
          val={5}
          name="Antd"
          func={changeUikit}
          desc={uiKitContent[5].desc}
        >
          <img
            src={antd}
            alt="text"
            height="78px"
            width="100px"
            className="ml-16"
          />
        </Card>
      </div>
    </div>
  );

  return (
    <>
      <Header
        title="FRONTEND REACT BOILERPLATE"
        subtitle="A Quick Setup to build your own application "
        showTitle={false}
        onTitleChanged={() => {}}
      >
        <img src={logo} alt="text" />
      </Header>
      <Layout backButton alert={alert}>
        <div className="flex flex-col py-20 md:flex-row gap-5">
          <div className="flex-1 items-center ">
            <Steps
              current={step}
              direction="vertical"
              onChange={(e: number) => {
                stepChange(e);
              }}
            >
              <Step
                description={
                  <div className="h-16 mt-6">
                    {frameworkContent[framework].name}
                  </div>
                }
                title="Framework"
              />
              <Step
                disabled={step <= 1 && framework === 0}
                description={
                  <div className="h-16 mt-6">{uiKitContent[uiKit].name}</div>
                }
                title="UI Kit"
              />
              <Step
                disabled={step <= 2 && uiKit === 0}
                description={<div className="h-16 mt-6">{projectName}</div>}
                title="Project Name"
              />
              <Step
                disabled={step <= 3 && gitUrl === ''}
                description={<div className="h-16" />}
                title="Command"
              />
            </Steps>
          </div>
          <div className=" flex-4 flex-col items-start ">
            <h1 className="text-2xl font-bold mb-6 ">
              {' '}
              Select the Boilerplate
            </h1>
            <div
              ref={boilerplateRef}
              style={{ maxHeight: '480px', overflowY: 'hidden' }}
            >
              <Framework />
              <UiKit />
              <div className="mt-24 mb-24">
                <h2 className="text-lg ">Name your project</h2>
                <div
                  className="inline mt-3 gap-5 "
                  ref={projectRef}
                  style={{ minHeight: '125px' }}
                >
                  <input
                    className="my-5 rounded-sm border-solid border-2 pl-2 w-96  shadow-sm h-8"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => {
                      setProjectName(e.target.value);
                      setGitUrl('');
                    }}
                  />
                  {projectName !== '' ? (
                    <button
                      className=" rounded-sm text-white bg-blue-600 p-1 w-20 shadow-sm h-8 ml-5"
                      type="submit"
                      onClick={() => onSubmit()}
                    >
                      Submit
                    </button>
                  ) : null}
                </div>

                <div className="w-full mb-36 mt-12">
                  {gitUrl !== '' ? (
                    <>
                      <h2 className="text-lg ">Command</h2>
                      <div className="flex w-full mt-3 ">
                        <input
                          className="my-5 mr-5 rounded-sm bg-blue-600 text-white pl-2 w-full h-8 "
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
                      </div>
                      <h2 className="text-lg">
                        {' '}
                        Kick start your project by executing the command in your
                        terminal
                      </h2>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BoilerPlate;
