import AddModule from '@/src/pages/AddModule';
import GettingStarted from '@/src/pages/GettingStarted';
import Home from '@/src/pages/HomePage';
import ViewPage from '@/src/pages/ViewPage';

interface keyable {
  [uikit: number]: any;
}
export type navType = {
  name: string;
  date: string;
  href: string;
  desc: string;
  readMorehref: string;
  target: string;
};

export type stackNavType = {
  id: string;
  routes: string;
  component: any;
};

export type attributes = {
  name: string;
  title: string;
  desc: string;
};

export const frameworkContent: keyable = {
  0: {
    name: '',
  },
  1: {
    desc: 'Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production',
    name: 'Create React App',
    img: 'cra',
  },
  2: {
    desc: 'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. ',
    name: 'Nextjs',
    img: 'nextIcon',
  },
};

export const uiKitContent: keyable = {
  0: {
    name: '',
  },
  3: {
    id: 3,
    desc: 'Tailwind UI is a collection of professionally designed, pre-built, fully responsive HTML snippets you can drop into your Tailwind projects. It is more like a set of blueprints, patterns, and ideas than a rigid UI kit',
    name: 'Tailwind CSS',
  },
  4: {
    id: 4,
    desc: 'Material UI provides a robust, customizable, and accessible library of foundational and advanced components, enabling you to build your own design system and develop a react applications faster',
    name: 'Material UI',
  },
  5: {
    id: 5,
    desc: 'Ant design is a React UI library that contains a set of high-quality components and demos for building rich, interactive user interfaces',
    name: 'Ant Design',
  },
};

export const navList: navType[] = [
  {
    name: 'React Frontend Boilerpate',
    date: 'January 2022',
    readMorehref: '/react-boilerplate',
    href: '/react-boilerplate',
    target: '',
    desc: "Boilerplate contains all you need to start your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.",
  },
  {
    name: 'Backend NodeJS Boilerplate',
    date: 'January 2022',
    readMorehref: '/backend-boilerplate',
    href: '/backend-boilerplate',
    target: '',
    desc: "Boilerplate contains all you need to start your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.",
  },
  {
    name: 'PDF Generator',
    date: 'January 2022',
    readMorehref: '/pdf-generator',
    href: '/pdf-generator',
    target: '',
    desc: 'Pdf generator is a Pdf document generation library for Node and the browser that makes creating complex, multi-page, printable documents easy both with server and server less. The API embraces chain-ability, and includes both low level functions as well as abstractions for higher level functionality. These API is designed to be simple, so generating complex documents is often as simple as a few function calls. This Module can run both in server and serverless as per the developer need. It will convert the HTML into the Pdf format.',
  },
  {
    name: 'Live Chat- Socket.IO',
    date: 'January 2022',
    readMorehref: '',
    href: '',
    target: '',
    desc: ' ',
  },
  {
    name: 'Live Chat- Firebase',
    date: 'January 2022',
    readMorehref: '',
    href: '',
    target: '',
    desc: ' ',
  },
  {
    name: 'Image Optimizer',
    date: 'January 2022',
    readMorehref: '',
    href: '',
    target: '',
    desc: '',
  },
  {
    name: 'Just Communicate',
    date: 'January 2022',
    readMorehref: '/just-communication',
    href: '/just-communication',
    target: '',
    desc: 'Communication Framework is the utility components that can be used to achieve the list of pre-defined features which can help you to implement the communication methods in your project.',
  },
  {
    name: 'Captcha Generator',
    date: 'January 2022',
    readMorehref: '/captcha-generator',
    href: '/captcha-generator',
    target: '',
    desc: 'Captcha Generator is a Node library for quickly and easily generating captcha images that can be used through an authorized bot to verify human users on a chat platform such as Slack or Discord.',
  },
  {
    name: 'Utility',
    date: 'January 2022',
    readMorehref: '/utility',
    href: '/utility',
    target: '',
    desc: '',
  },
  {
    name: 'Comment Module',
    date: 'January 2022',
    readMorehref: '/comment-module',
    href: '/comment-module',
    target: '',
    desc: 'Comment Module is the utility that can be used to achieve nested comments which can help you to define approach of having comments on various post,images and etc.',
  },
];

// prettier-ignore
export const title = 'A backend boilerplate is a starter project for quickly building RESTful APIs using Node.js with the Docker Support. By running a single command, you will get a production-ready Node.js app installed and fully configured on your machine. The app comes with many built-in features, such as authentication using JWT, request validation, unit and integration tests, continuous integration, docker support, API documentation, pagination, etc.';

export const addModuleData: any = [
  { name: 'Title and Description', id: 1 },
  { name: 'Acknowledgements', id: 2 },
];

export const selectModuleData: any = [
  { name: 'API Reference', id: 3 },
  { name: 'Appendix', id: 4 },
  { name: 'Authors', id: 5 },
  { name: 'Badges', id: 6 },
  { name: 'Color Ref', id: 7 },
  { name: 'Contributing', id: 8 },
  { name: 'Demo', id: 9 },
  { name: 'Deployement', id: 10 },
];

export const stackNavList: stackNavType[] = [
  {
    id: '1',
    routes: '/',
    component: GettingStarted,
  },
  {
    id: '2',
    routes: '/viewpage',
    component: ViewPage,
  },
  {
    id: '3',
    routes: '/homepage',
    component: Home,
  },
  {
    id: '3',
    routes: '/add-module',
    component: AddModule,
  },
];

export const apiData: attributes[] = [
  {
    name: 'React Native',
    title: 'React Native',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 2',
    title: 'React Native 2',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 3',
    title: 'React Native 3',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 4',
    title: 'React Native 4',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 5',
    title: 'React Native 5',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 6',
    title: 'React Native 6',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 7',
    title: 'React Native 7',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 8',
    title: 'React Native 8',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
  {
    name: 'React Native 9',
    title: 'React Native 9',
    desc: 'Build one JavaScript/TypeScript project that runs natively on all your users devices.',
  },
];
