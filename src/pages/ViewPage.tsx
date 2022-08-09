import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { NavLink } from 'react-router-dom';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { firebaseConfig } from '../assets/data/content';
import Header from '../components/headerHome';
import Heading from '../components/viewPageComponent/heading';
import Description from '../components/viewPageComponent/description';
import ApiReference from '../components/viewPageComponent/apireference';
import Usage from '../components/viewPageComponent/usage';

function renderComponentList(data: any) {
  switch (data?.type) {
    case 'Heading':
      return <Heading value={data?.desc} />;
    case 'Description':
      return <Description value={data?.desc} />;
    case 'Api Reference':
      return <ApiReference value={data?.desc} />;
    case 'Usage':
      return <Usage value={data?.desc} />;
    default:
      return <p>default</p>;
  }
}

function convertToSlug(Text: any) {
  return Text.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}

const ViewPage = () => {
  type CategoriesType = {
    mainTitle: string;
    dataset: CoursesType[];
  };

  type CoursesType = {
    id: number;
    dp: number;
    type: string;
    desc: string;
  };

  const [count, setCount] = useState(0);
  const [displayData, setDisplayData] = useState<any | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [firestoreData, setFirestoreData] = useState<CategoriesType[]>([]);

  const callFirestore = async () => {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const mySnapshot = await getDocs(collection(firestore, 'dailySpecial'));
    mySnapshot.forEach((doc) => {
      const obj = {
        mainTitle: '',
        dataset: [
          {
            id: 0,
            dp: 0,
            type: '',
            desc: '',
          },
        ],
      };
      obj.mainTitle = doc.data().mainTitle;
      obj.dataset = doc.data().dataset;
      firestoreData.push(obj);
    });
    console.log(' => ', hasLoaded);
    setDisplayData(firestoreData[0].dataset);
    setHasLoaded(true);
  };

  useEffect(() => {
    callFirestore();
  }, []);

  return (
    <div>
      <Header />
      <div className="main xl:pt-20 w-full h-full 2xl:h-full d-flex flex-row">
        <div className="container-main">
          <div className="css-jn5ppe">
            <nav className="css-1u2eykn">
              <div>
                <div className="css-n085mf">
                  <div className="css-i3pbo">
                    <div className="css-l4enf1"> Get Started</div>
                  </div>
                  <div className="css-3i8gv9">
                    <button
                      className="css-1q7iryg"
                      type="button"
                      aria-label="Instalation"
                      onClick={() => {
                        console.log('clicked');
                      }}
                    >
                      <p className="css-1q7iryg">Installation</p>
                    </button>
                  </div>
                </div>

                <div className="css-n085mf">
                  <div className="css-i3pbo">
                    <div className="css-l4enf1"> API Reference</div>
                  </div>
                  {firestoreData.map((data, index) => (
                    <NavLink
                      to={{
                        pathname: `/viewpage/${convertToSlug(
                          data.mainTitle.toString(),
                        )}`,
                      }}
                    >
                      <div
                        className="css-3i8gv9"
                        tabIndex={index}
                        onClick={() => {
                          setCount(index);
                          setDisplayData(firestoreData[index].dataset);
                        }}
                        role="button"
                        aria-hidden="true"
                      >
                        <li
                          className={`css-1q7iryg ${
                            count === index ? 'css-1q7irygactive' : ''
                          }`}
                        >
                          {data.mainTitle}
                        </li>
                      </div>
                    </NavLink>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="css-xdc99y">
          <div className="css-jn5ppe">
            <div className="css-194k3rb">
              <div className="css-g1n4fp">
                {
                  // prettier-ignore
                  displayData != null
                  && displayData.map((data:any) => (
                       renderComponentList(data)
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
