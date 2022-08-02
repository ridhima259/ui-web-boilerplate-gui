import React, { useState } from 'react';
import { apiData } from '../assets/data/content';
import Header from '../components/headerHome';

const ViewPage = () => {
  const [count, setCount] = useState(0);

  // function HandleItemClick(
  //   e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  // ): void {
  //   // const history = useHistory();
  //   console.log((e.target as any).innerText);
  //   console.log(history);
  //   return history.push({
  //     pathname: '/',
  //     search: '?=react-native',
  //   });
  // }
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
                  {apiData.map((data, index) => (
                    <div
                      className="css-3i8gv9"
                      tabIndex={index}
                      onClick={() => setCount(index)}
                      role="button"
                      aria-hidden="true"
                    >
                      <li
                        className={`css-1q7iryg ${
                          count === index ? 'css-1q7irygactive' : ''
                        }`}
                      >
                        {data.name}
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
                <h1
                  // style={"margin-bottom:8px;font-family:Inter-Black, system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';font-weight:900"}
                  className="css-14rkxji"
                >
                  {apiData[count].title}
                </h1>
                <p className="css-152yx2">{apiData[count].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
