/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import codeartifactlogin from '../assets/svg/codeartifact_login.png';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';

const ReactNative = () => (
  <div>
    <Header
      title="REACT NATIVE"
      subtitle="Easiest way to setup your React Native"
    />
    <a
      href="/"
      title="back"
      className=" p-5 absolute bg-blue-600 rounded-full top-24 left-3"
    >
      <img src={back} alt="text" />
    </a>
    <div className="mx-10 pb-5 pt-40">
      <div>
        <div className="text-3xl py-3 font-extrabold">React Native</div>
        <hr className="pb-1" />
        <p>
          Boilerplate contains all you need to start your next React.js project.
          Simple, robust, well-organized, all you need to do is clone, install
          and you&apos;re ready to start.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites</div>
        <hr className="pb-1" />
        <div>To run this React Native, we need the followings:</div>
        <div>
          <ul className="list-decimal p-5">
            <li>Node.js and NPM</li>
            <li>Fibonalabs AWS access</li>
            <li>Codecommit access</li>
            <li>Install Serverless globally (for serverless alone)</li>
          </ul>
          <ul className="list-disc px-5 py-3">
            <li>
              For Fibonalabs AWS login credentials and repository access please
              contact - Ms. Vidhya
            </li>
            <li>
              For Codecommit initial setup refer the following document - Please
              contact - Ms. Vidhya
            </li>
            <li>
              After you have a necessary access, Follow the steps as mentioned
            </li>
          </ul>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Getting Started</div>
          <hr className="pb-1" />
          <div>
            After you have the access, open your terminal, and follow the below
            steps to login to aws codeartifact:
          </div>
          <div className="text-3xl py-3 font-extrabold">AWS Login Command:</div>
          <div>
            aws codeartifact login --tool npm --repository fibonalabs --domain
            dev-fibonalabs --domain-owner 650571980132
          </div>
          <ul className="list-disc px-5 py-3">
            <li>
              <b>codeartifact </b>
              is AWS repository service
            </li>
            <li>
              <b>fibonalabs </b>
              is the codeartifact reository name
            </li>
            <li>
              <b>dev-fibonalabs </b>
              is the codeartifact domain name
            </li>
            <li>
              <b>650571980132 </b>
              is the domain ID
            </li>
          </ul>
          <img src={codeartifactlogin} alt="codeartifact" />
          <div className="py-2">
            Once you have given the proper repository name, domain name & domain
            owner id. The npm will be successfully configured to use AWS
            CodeArtifact repository and shows the below output.
          </div>
        </div>
        {/* <div>
          <div className="text-3xl py-3 font-extrabold">
            HTML To PDF using AWS Lambda Functions and Layers with Serverless
          </div>
          <div className="text-3xl py-3 font-extrabold">Pre-requisite: </div>
          <div>
            <ul className="list-decimal p-5">
              <li>
                <a
                  className="text-blue-400"
                  href="https://nodejs.org/en/download/"
                >
                  Node.js - - https://nodejs.org/en/download/
                </a>
              </li>
              <li>AWS CLI Setup</li>
              <li>Codecommit access</li>
              <li>Install Serverless globally</li>
            </ul>
            <ul className="list-disc px-5 py-3">
              <li>
                For Fibonalabs AWS login credentials and repository access
                please contact - Ms. Vidhya
              </li>
              <li>
                For Codecommit initial setup refer the following document -
                Please contact - Ms. Vidhya
              </li>
              <li>
                After you have a necessary access, Follow the steps as mentioned
              </li>
            </ul>
            <div className="text-xl py-3 font-extrabold">
              Install serverless globally:
            </div>
            <div>Run this command in the terminal:</div>
            <div className="bg-gray-100 border p-3 mt-3">
              <code>npm i -g serverless </code>
            </div>
          </div>
        </div> */}
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <hr className="pb-1" />
        <ul className="list-disc px-5 py-3">
          <li>First, clone the repo</li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            git clone
            https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/ui-reactnative-boilerplate
          </code>
        </div>
        <ul className="list-disc px-5 py-3">
          <li>
            After cloning the repo, install all the dependencies using the
            following command:
          </li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>npm install</code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Folder Structure:</div>
        <div className="py-2">
          In the Root, we have src folder. Inside src folder we have,
        </div>
        <ul className="list-disc px-5 py-3">
          <li>api</li>
          <li>assets</li>
          <li>component</li>
          <li>constant</li>
          <li>lib</li>
          <li>navigation</li>
          <li>screens</li>
          <li>types</li>
          <li>utils</li>
        </ul>
        <div>
          <div className="text-xl py-3 font-extrabold">API</div>
          <p className="pb-2">
            All the HTTP methods, SWR configurations are inside this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">ASSETS</div>
          <p className="pb-2">
            The assets folder container two sub-folders
            <b> fonts </b>
            and
            <b> images </b>
            .All the external resources are inside this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">COMPONENT</div>
          <p className="pb-2">
            The common components like
            <b> customText </b>
            and
            <b> fastImage </b>
            are inside this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">CONSTANT</div>
          <p className="pb-2">
            As the name represents, all the constant values are stored inside
            this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">LIB</div>
          <p className="pb-2">
            This folder contains configured external libraries such as
            <b> axios </b>,<b> firebase </b>,<b> miragejs </b>,<b> redux </b>,
            <b> reduxToolkit </b>,<b> reactnativepermissions </b>
            and
            <b> swr </b>.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">NAVIGATION</div>
          <p className="pb-2">
            The full project root navigation configuration are inside this
            folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">SCREENS</div>
          <p className="pb-2">
            The app specific screens are inside this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">TYPES</div>
          <p className="pb-2">
            All the type definition files are inside this folder.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">UTIL</div>
          <p className="pb-2">
            This folder contains lot of utility modules, which are useful
            through out the project.
          </p>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">LIBRARY:</div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Axios</div>
          <p className="pb-2">
            Promise based HTTP client for the browser and node.js
          </p>
          <div className="text-xl py-3 font-extrabold">where to find:</div>
          <p className="pb-2">/src/lib/axios/index.ts</p>
          <div className="text-xl py-3 font-extrabold">API Reference</div>
          <p className="pb-2">For creating own Axios constants</p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>createAxiosInstance(reqHeader, baseUrl = BASE_URL)</code>
          </div>
          <div className="mt-5">
            <table className="border-2">
              <tr className="border-b-2">
                <th className="py-2">Parameter</th>
                <th className="py-2">Type</th>
                <th className="py-2">Description</th>
                <th className="py-2"> </th>
              </tr>
              <tr className="border-b-2">
                <td className="text-center p-2">reqHeader</td>
                <td className="text-center p-2">any</td>
                <td className="text-center p-2">Request Header</td>
                <td className="text-center p-2 font-extrabold">Required</td>
              </tr>
              <tr className="border-b-2">
                <td className="text-center p-2">baseURL</td>
                <td className="text-center p-2"> string</td>
                <td className="text-center p-2">Base URL from the constant</td>
                <td className="text-center p-2 font-extrabold">Required</td>
              </tr>
            </table>
          </div>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">FireBase</div>
          <p className="pb-2">needed</p>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Mirage</div>
          <p className="pb-2">
            Mirage JS is an API mocking library that lets you build, test and
            share a complete working JavaScript application without having to
            rely on any backend services.
          </p>
          <div className="text-xl py-3 font-extrabold">where to find:</div>
          <p className="pb-2">/src/lib/miragejs/index.ts</p>
          <div className="text-xl py-3 font-extrabold">API Reference</div>
          <p className="pb-2">
            For creating a server alongside your networking code
          </p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>makeServer( namespace, endpoint, mockData)</code>
          </div>
          <div className="mt-5">
            <table className="border-2">
              <tr className="border-b-2">
                <th className="py-2">Parameter</th>
                <th className="py-2">Type</th>
                <th className="py-2">Description</th>
                <th className="py-2"> </th>
              </tr>
              <tr className="border-b-2">
                <td className="text-center p-2">namespace</td>
                <td className="text-left p-2">string</td>
                <td className="text-center p-2">Namespace for Request</td>
                <td className="text-center p-2 font-extrabold">Required</td>
              </tr>
              <tr className="border-b-2">
                <td className="text-left p-2">endpoint</td>
                <td className="text-center p-2">string</td>
                <td className="text-center p-2">Endpoint to make api calls</td>
                <td className="text-center p-2 font-extrabold">Required</td>
              </tr>
              <tr className="border-b-2">
                <td className="text-left p-2">mockdata</td>
                <td className="text-center p-2">array</td>
                <td className="text-center p-2">Contains array of objects</td>
                <td className="text-center p-2 font-extrabold">Required</td>
              </tr>
            </table>
            <div className="text-xl pt-6 font-extrabold">
              For making API call, if you created mockAPI for list of todos
            </div>
            <div className="bg-gray-100 border p-3 mt-3">
              <code>
                fetch(&apos;/api/todos&apos;) <br />
                .then(response=&gt; response.json()) <br />
                .then(json=&gt; console.log(json.todos))
                <br />
                .catch(err=&gt; console.log(err))
              </code>
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Redux</div>
          <p className="pt-2">Import a Redux Store</p>
          <ul className="list-disc px-5 py-3">
            <li>
              Add this import statement to the <b> index.js </b>
            </li>
            <li>
              <b> import store from &apos;@/src/lib/redux/store&apos;; </b>
            </li>
          </ul>
          <p className="pt-2">Import Redux store using reduxToolkit:</p>
          <ul className="list-disc px-5 py-3">
            <li>
              Add this import statement to the <b> index.js </b>
            </li>
            <li>
              <b>import store from &apos;@/src/lib/reduxToolkit/store&apos;;</b>
            </li>
          </ul>
          <p className="pt-2">
            Wrap the App component with &lt;Provider&gt; in index.js
          </p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              ...
              <br />
              &lt;Provider store=&#123;store&#125;&gt;
              <br />
              &nbsp; &lt;App /&gt;
              <br />
              &lt;/Provider&gt; <br />
              ...
            </code>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">
          React Native Permission
        </div>
        <p className="pb-2">
          A unified permissions API for React Native on iOS, Android and
          Windows.
        </p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/src/lib/rnpermissions/index.ts</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">
          For calling permission, during accessing native modules
        </p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            await <br />
            Permission.checkPermission(permissionTypes)
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">checkPermission</td>
              <td className="text-center p-2">PERMISSION</td>
              <td className="text-center p-2">Specify the permission type</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
          </table>
          <div className="text-xl pt-6 font-extrabold">
            Here is the list of Permission types for both android and iOS
          </div>
          <div className="text-xl pt-6 font-extrabold">For Android:</div>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              PERMISSIONS.ANDROID.ACCEPT_HANDOVER;
              <br />
              <br />
              PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION;
              <br />
              PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION;
              <br />
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
              <br />
              PERMISSIONS.ANDROID.ACTIVITY_RECOGNITION;
              <br />
              PERMISSIONS.ANDROID.ADD_VOICEMAIL;
              <br />
              PERMISSIONS.ANDROID.ANSWER_PHONE_CALLS;
              <br />
              PERMISSIONS.ANDROID.BODY_SENSORS; PERMISSIONS.ANDROID.CALL_PHONE;
              <br />
              PERMISSIONS.ANDROID.CAMERA; PERMISSIONS.ANDROID.GET_ACCOUNTS;
              <br />
              PERMISSIONS.ANDROID.PROCESS_OUTGOING_CALLS;
              <br />
              PERMISSIONS.ANDROID.READ_CALENDAR;
              <br />
              PERMISSIONS.ANDROID.READ_CALL_LOG;
              <br />
              PERMISSIONS.ANDROID.READ_CONTACTS;
              <br />
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
              <br />
              PERMISSIONS.ANDROID.READ_PHONE_NUMBERS;
              <br />
              PERMISSIONS.ANDROID.READ_PHONE_STATE;
              <br />
              PERMISSIONS.ANDROID.READ_SMS; PERMISSIONS.ANDROID.RECEIVE_MMS;
              <br />
              PERMISSIONS.ANDROID.RECEIVE_SMS;
              <br />
              PERMISSIONS.ANDROID.RECEIVE_WAP_PUSH;
              <br />
              PERMISSIONS.ANDROID.RECORD_AUDIO; PERMISSIONS.ANDROID.SEND_SMS;
              <br />
              PERMISSIONS.ANDROID.USE_SIP; PERMISSIONS.ANDROID.WRITE_CALENDAR;
              <br />
              PERMISSIONS.ANDROID.WRITE_CALL_LOG;
              <br />
              PERMISSIONS.ANDROID.WRITE_CONTACTS;
              <br />
              PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE;
              <br />
            </code>
          </div>
          <div className="text-xl pt-6 font-extrabold">For iOS:</div>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY; <br />
              PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL; <br />
              PERMISSIONS.IOS.CALENDARS; <br />
              PERMISSIONS.IOS.CAMERA; <br />
              PERMISSIONS.IOS.CONTACTS; <br />
              PERMISSIONS.IOS.FACE_ID; <br />
              PERMISSIONS.IOS.LOCATION_ALWAYS; <br />
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE; <br />
              PERMISSIONS.IOS.MEDIA_LIBRARY; <br />
              PERMISSIONS.IOS.MICROPHONE; <br />
              PERMISSIONS.IOS.MOTION; <br />
              PERMISSIONS.IOS.PHOTO_LIBRARY; <br />
              PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY; <br />
              PERMISSIONS.IOS.REMINDERS; <br />
              PERMISSIONS.IOS.SIRI; <br />
              PERMISSIONS.IOS.SPEECH_RECOGNITION; <br />
              PERMISSIONS.IOS.STOREKIT; <br />
            </code>
          </div>
          <div className="text-3xl py-3 font-extrabold">Usage</div>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              import &#123;(Permission, PERMISSION_TYPE)&#125; from
              &apos;../lib/rnpermissions&apos;;
              <br />
              <br />
              const checkPermission = async () &gt; &#123; <br />
              &nbsp; try&#123;
              <br />
              &nbsp; &nbsp; const permission = await
              <br />
              &nbsp; &nbsp; Permission.checkPermission(PERMISSION_TYPE.camera);
              <br />
              &nbsp; &nbsp; if(permission.granted)&#123;
              <br /> &nbsp; &nbsp; &#125;else&#123; <br />
              &nbsp; &nbsp; return false;
              <br /> &nbsp; &nbsp; &#125; <br />
              &nbsp; &nbsp; &#125;
              <br />
              &nbsp; &nbsp; catch(err)&#123; <br />
              &nbsp; &nbsp; console.error(&apos;Error: &apos;,err);
              <br /> &nbsp; &nbsp; &#125; <br />
              &#125;;
            </code>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">SWR js</div>
        <p className="pb-2">
          SWR is a strategy to first return the data from cache (stale), then
          send the fetch request (revalidate), and finally come with the
          up-to-date data.
        </p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/src/lib/swr/index.ts</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">For making API calls,</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>async fetcher(url)</code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">url</td>
              <td className="text-center p-2">string</td>
              <td className="text-center p-2">
                Request URL for making API calls
              </td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="text-3xl py-3 font-extrabold">UTILITIES:</div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Api</div>
        <p className="pb-2">Utility for calling API methods quickly.</p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/src/lib/api/index.ts</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">For calling API methods,</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            async callApi(url, &#123;(type, data, header, customBaseUrl)&#125;)
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">url</td>
              <td className="text-center p-2">string</td>
              <td className="text-center p-2">URL for making API calls</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">
                &#123;(type, data, header, customBaseUrl) &#125;
              </td>
              <td className="text-center p-2">APIOptions</td>
              <td className="text-center p-2">-</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Localpopup</div>
        <p className="pb-2">
          Animated toast message component for React Native.
        </p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/src/lib/localPopup/index.ts</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">For calling API methods,</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            const messageObj = &#123;
            <br />
            ((title = &apos;&apos;),
            <br />
            (message = &apos;&apos;),
            <br />
            (type = &apos;success&apos;),
            <br />
            (position = &apos;top&apos;),
            <br />
            (visibilityTime = 1000),
            <br />
            (autoHide = true),
            <br />
            (topOffset = 40),
            <br />
            (bottomOffset = 40),
            <br />
            onPress,
            <br />
            onShow,
            <br />
            onHide)
            <br />
            &#125;
            <br />
            <br />
            showPopupMessage(messageObj)
          </code>
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            type MessageObjType = &#123; title: string;
            <br />
            message: string;
            <br />
            type?: &apos;success&apos; | &apos;error&apos; | &apos;info&apos;;
            <br />
            position?: &apos;top&apos; | &apos;bottom&apos;;
            <br />
            visibilityTime?: number;
            <br />
            autoHide?: boolean;
            <br />
            topOffset?: number;
            <br />
            bottomOffset?: number;
            <br />
            onShow?: () =&gt; void;
            <br />
            onHide?: () =&gt; void;
            <br />
            onPress?: () =&gt; void;
            <br />
            &#125;
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">messageObj </td>
              <td className="text-center p-2">MessageObjType</td>
              <td className="text-center p-2">title, message are field</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Screen Ratio</div>
        <p className="pb-2">
          It contains utility functions for converting width, height into DP,
          listening mobile orientation changes and calculate normalize value for
          smaller device.
        </p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/src/lib/screenRatio/index.ts</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">For converting Width, height into DP:</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            widthPercentageToDP(widthPercent)
            heightPercentageToDP(heightPercent)
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">widthPercent </td>
              <td className="text-center p-2">any</td>
              <td className="text-center p-2">Width in Percentage</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">heightPercent </td>
              <td className="text-center p-2">any</td>
              <td className="text-center p-2">Width in Percentage</td>
              <td className="text-center p-2 font-extrabold">Required</td>
            </tr>
          </table>
        </div>
        <p className="pt-4">For mobile orientation changes listener:</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            listenOrientationChange(that)
            <br />
            removeOrientationListener()
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">that </td>
              <td className="text-center p-2">callback </td>
              <td className="text-center p-2">
                Return if mobile is in landscape or portrait
              </td>
              <td className="text-center p-2 font-extrabold">-</td>
            </tr>
          </table>
        </div>
        <p className="pt-4">For calculating normalize value:</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>normalize(size)</code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Parameter</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">size </td>
              <td className="text-center p-2">any </td>
              <td className="text-center p-2">-</td>
              <td className="text-center p-2 font-extrabold">-</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default ReactNative;
