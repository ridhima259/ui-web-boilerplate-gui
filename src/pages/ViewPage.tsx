import React, { useState, useEffect } from 'react';
import Gist from 'react-gist';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';
import { firebaseConfig } from '../assets/data/content';
import Header from '../components/headerHome';
import Heading from '../components/heading';

function renderComponentList(data: any) {
  switch (data?.type) {
    case 'Heading':
      return <Heading value={data?.desc} />;
    case 'Description':
      return <div className="css-ngwsh7">{data?.desc}</div>;
    case 'Api Reference':
      return (
        <div>
          <h1 className="css-rqrjmr">Api Reference</h1>
          <div dangerouslySetInnerHTML={{ __html: data?.desc }} />
        </div>
      );
    case 'Usage':
      return (
        <div>
          <h1 className="css-rqrjmr">Usage</h1>
          <Gist id={data?.desc} />
        </div>
      );
    default:
      return <p>default</p>;
  }
}

const ViewPage = () => {
  const [count, setCount] = useState(0);
  const [displayData, setDisplayData] = useState<any | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [firestoreData, setFirestoreData] = React.useState([
    {
      mainTitle: String,
      dataset: [
        {
          id: Number,
          dp: Number,
          type: String,
          desc: String,
        },
      ],
    },
  ]);

  const callFirestore = async () => {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const mySnapshot = await getDocs(collection(firestore, 'dailySpecial'));
    mySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // apiData.push(doc.data());
      const obj = {
        mainTitle: String,
        dataset: [
          {
            id: Number,
            dp: Number,
            type: String,
            desc: String,
          },
        ],
      };
      obj.mainTitle = doc.data().mainTitle;
      obj.dataset = doc.data().dataset;
      firestoreData.push(obj);
      // setFirestoreData(obj);
    });
    console.log(' => ', hasLoaded);
    setHasLoaded(true);
  };

  useEffect(() => {
    callFirestore();
  }, []);

  return (
    <div>
      <Header />
      <div className="css-f3dkuz">
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

                  <div className="css-3i8gv9">
                    <a href="/homepage" className="css-1q7iryg">
                      Create a new app
                    </a>
                  </div>

                  <div className="css-3i8gv9">
                    <a href="/homepage" className="css-1q7iryg">
                      errors and debugging
                    </a>
                  </div>
                </div>

                <div className="css-n085mf">
                  <div className="css-i3pbo">
                    <div className="css-l4enf1"> API Reference</div>
                  </div>
                  {firestoreData.map((data, index) => (
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
