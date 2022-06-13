import React from 'react';
import codeartifactlogin from '../assets/svg/codeartifact_login.png';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';

const JustCommunication = () => (
  <div>
    <Header
      title="COMMUNICATION FRAMEWORK"
      subtitle="Easiest way to setup your   Communication Framework"
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
        <div className="text-3xl py-3 font-extrabold">
          Communication Framework
        </div>
        <p>
          <b>Communication Framework</b>
          is the utility components that can be used to achieve the list of
          pre-defined features which can help you to implement the communication
          methods in your project.
        </p>
        <div className="text-3xl py-3 font-extrabold">
          How Communication Framework Works
        </div>
        <p>
          Communication Framework contains all you needs to have in your
          project. Very Simple, robust, well-Organized, all you need to do is
          install and start use of it. Using this utility you can give your
          project a very well managed communication utility based on your
          requirement.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Features</div>
        <ul className="list-decimal px-10">
          <li>EMAIL</li>
        </ul>
        <ul className="list-disc px-14">
          <li>Single Receiver</li>
          <li>Multi Receiver</li>
          <li>CC </li>
          <li>Attachments</li>
        </ul>
        <ul className="px-6">
          <li>2.Push Notification</li>
        </ul>
        <ul className="list-disc px-14">
          <li>Send to Topic</li>
          <li>Send to Individual User</li>
          <li>Rich Notification (Images)</li>
          <li>Action Notification</li>
        </ul>
        <ul className="px-6">
          <li>3.SMS</li>
        </ul>
        <ul className="list-disc px-14">
          <li> SMS Type </li>
          <li>3rd Party or 1st Party</li>
          <li>Whatsapp Integration</li>
        </ul>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites:</div>
        <ul className="list-disc px-10 pb-3">
          <li>Fibonalabs AWS access </li>
          <li>Codecommit access</li>
          <li>NodeJS and NPM</li>
        </ul>
        <div className="py-3">
          For Fibonalabs AWS login credentials and repository access please
          contact - Ms. Vidhya
        </div>
        <div className="py-3">
          For Codecommit initial setup refer the following document
          -AWS_codecommit_Initial_setup.docx
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <div className="pb-3">
          After you have the access, open your terminal, and follow the below
          steps to login to aws codeartifact:
        </div>
        <div className="text-3xl py-3 font-extrabold">AWS Login Command</div>
        <div className="bg-gray-100 border p-3">
          <code>
            aws codeartifact login --tool npm --repository fibonalabs --domain
            dev-fibonalabs --domain-owner 650571980132
          </code>
        </div>
        <ul className="list-disc px-10 p-3">
          <li>
            <b>codeartifact </b>
            is AWS repository service
          </li>
          <li>
            <b>fibonalabs </b>
            fibonalabs is the codeartifact reository name
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
        <div className="py-3">
          Once you have given the proper repository name, domain name & domain
          owner id. The npm will be successfully configured to use AWS
          CodeArtifact repository and shows the below output.
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Installation Command</div>
        <div>Installation can be done in two ways. They are,</div>
        <div className="py-3">1.Using npm:</div>
        <div className="bg-gray-100 border p-3">
          <code>npm install @fibonalabs/just-communicate</code>
        </div>
        <div className="py-3">
          By default, npm install will install all modules listed as
          dependencies in package.json.
        </div>
        <div className="py-3">2Using Yarn:</div>
        <div className="bg-gray-100 border p-3">
          <code>yarn add @fibonalabs/just-communicate</code>
        </div>
        <div className="text-3xl pt-3 font-extrabold">Usage</div>
        <div className="py-3">
          You can create a new instance of just-communicate.
        </div>
        <div className="bg-gray-100 border p-3">
          <code>
            import &#123;create &#125; from
            &apos;@fibonalabs/just-communicate&apos; const notificationInstance
            = create(&#123; clientId: &#60;CLIENT_ID&#62;, &#125;)
          </code>
        </div>
        <div className="text-3xl py-3 font-extrabold">Email</div>
        <div className="bg-gray-100 border p-3">
          <code>
            notificationInstance.sendEmail(&#123; id: string, sender: string |
            string[], body: string, subject: string, &#125;)
          </code>
        </div>
        <div className="text-3xl py-3 font-extrabold">Push Notification</div>
        <div className="bg-gray-100 border p-3">
          <code>
            notificationInstance.sendPushNotification(&#123; id: string, sender:
            string | string[], title: string, body: string, target:
            &apos;token&apos; | &apos;topic&apos; | &apos;condition&apos;&#125;)
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Config</div>
        <div className="text-3xl pb-3 font-extrabold">
          Just Communicate Config:
        </div>
        <div>
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Name</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">clientId</td>
              <td className="text-center p-2">string</td>
              <td className="text-center p-2">-</td>
              <td className="text-center p-2">required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-center p-2">baseURL</td>
              <td className="text-center p-2"> string</td>
              <td className="text-center p-2">
                Use Client ID instead of baseURL
              </td>
              <td className="text-center p-2">optional</td>
            </tr>
          </table>
          <div className="text-3xl py-3 font-extrabold">Email:</div>
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Name</th>
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">id</td>
              <td className="text-left p-2">string</td>
              <td className="text-left p-2">-</td>
              <td className="text-left p-2">required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">sender</td>
              <td className="text-left p-2">string | string[]</td>
              <td className="text-left p-2">-</td>
              <td className="text-left p-2">required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">data</td>
              <td className="text-left p-2">&#123;string : string&#125;</td>
              <td className="text-left p-2">-</td>
              <td className="text-left p-2">optional</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">body</td>
              <td className="text-left p-2">string </td>
              <td className="text-left p-2">-</td>
              <td className="text-left p-2">required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">subject</td>
              <td className="text-left p-2">string </td>
              <td className="text-left p-2">The subject of the e-mail</td>
              <td className="text-left p-2">required</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">subjectData</td>
              <td className="text-left p-2">&#123;string : string&#125;</td>
              <td className="text-left p-2">-</td>
              <td className="text-left p-2">optional</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">cc</td>
              <td className="text-left p-2">
                string | Address | Array&#60;string | Address&#62;
              </td>
              <td className="text-left p-2">
                Comma separated list or an array of recipients e-mail addresses
                that will appear on the Cc: field
              </td>
              <td className="text-left p-2">optional</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">bcc</td>
              <td className="text-left p-2">
                string | Address | Array&#60;string | Address&#62;
              </td>
              <td className="text-left p-2">
                Comma separated list or an array of recipients e-mail addresses
                that will appear on the Bcc: field -
              </td>
              <td className="text-left p-2">optional</td>
            </tr>
            <tr className="border-b-2">
              <td className="text-left p-2">attachments</td>
              <td className="text-left p-2">AttachmentType[]</td>
              <td className="text-left p-2">An array of attachment objects-</td>
              <td className="text-left p-2">optional</td>
            </tr>
          </table>
        </div>
        <div className="text-3xl py-3 font-extrabold">Address:</div>
        <table className="border-2">
          <tr className="border-b-2">
            <th className="py-2">Name</th>
            <th className="py-2">Type</th>
            <th className="py-2">Description</th>
            <th className="py-2"> </th>
          </tr>
          <tr className="border-b-2">
            <td className="text-center p-2">name</td>
            <td className="text-center p-2">string</td>
            <td className="text-center p-2">-</td>
            <td className="text-center p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-center p-2">Address</td>
            <td className="text-center p-2"> string</td>
            <td className="text-center p-2">-</td>
            <td className="text-center p-2">required</td>
          </tr>
        </table>
        <div className="text-3xl py-3 font-extrabold">AttachmentType:</div>
        <table className="border-2">
          <tr className="border-b-2">
            <th className="py-2">Name</th>
            <th className="py-2">Type</th>
            <th className="py-2">Description</th>
            <th className="py-2"> </th>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">filename</td>
            <td className="text-left p-2">string | false</td>
            <td className="text-left p-2">
              filename to be reported as the name of the attached file, use of
              unicode is allowed. If you do not want to use a filename, set this
              value as false, otherwise a filename is generated automatically
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">content</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              String, Buffer or a Stream contents for the attachments
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">href</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              an URL to the file (data uris are allowed as well)
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">httpHeaders</td>
            <td className="text-left p-2"> Headers</td>
            <td className="text-left p-2">
              optional HTTP headers to pass on with the href request,
              eg.&#123;authorization: &quot;bearer ...&quot;&#125;attachments
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">contentType</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              optional content type for the attachment, if not set will be
              derived from the filename property
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">contentDisposition</td>
            <td className="text-left p-2">
              &apos;attachment&apos; | &apos;inline&apos;
            </td>
            <td className="text-left p-2">
              optional content disposition type for the attachment, defaults to
              ‘attachment’
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">cid</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              optional content id for using inline images in HTML message
              source. Using cid sets the default contentDisposition to
              &apos;inline&apos; and moves the attachment into a
              multipart/related mime node, so use it only if you actually want
              to use this attachment as an embedded image
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">encoding</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              If set and content is string, then encodes the content to a Buffer
              using the specified encoding. Example values: base64, hex, binary
              etc. Useful if you want to use binary attachments in a JSON
              formatted e-mail object
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">headers</td>
            <td className="text-left p-2"> Headers</td>
            <td className="text-left p-2">
              custom headers for the attachment node. Same usage as with message
              headers
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">raw</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              an optional value that overrides entire node content in the mime
              message. If used then all other options set for this node are
              ignored.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">path</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              path to a file or an URL (data uris are allowed as well) if you
              want to stream the file instead of including it (better for larger
              attachments)
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
        </table>
        <div className="text-3xl py-3 font-extrabold">Push Notification:</div>
        <table className="border-2">
          <tr className="border-b-2">
            <th className="py-2">Name</th>
            <th className="py-2">Type</th>
            <th className="py-2">Description</th>
            <th className="py-2"> </th>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">id</td>
            <td className="text-left p-2">string</td>
            <td className="text-left p-2">-</td>
            <td className="text-left p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">sender</td>
            <td className="text-left p-2"> string | string[]</td>
            <td className="text-left p-2">-</td>
            <td className="text-left p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">data</td>
            <td className="text-left p-2"> &#123;string:string&#125;</td>
            <td className="text-left p-2">-</td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">body</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">The notifications body text.</td>
            <td className="text-left p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">title</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">The notifications title.</td>
            <td className="text-left p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">target</td>
            <td className="text-left p-2">
              &apos;token&apos; | &apos;topic&apos; | &apos;condition&apos;
            </td>
            <td className="text-left p-2">
              Registration token to send a message to.
            </td>
            <td className="text-left p-2">required</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">image</td>
            <td className="text-left p-2"> string</td>
            <td className="text-left p-2">
              Contains the URL of an image that is going to be downloaded on the
              device and displayed in a notification.JPEG, PNG, BMP have full
              support across platforms.Animated GIF and video only work on iOS.
              WebP and HEIF have varying levels of support across platforms and
              platform versions. Android has 1MB image size limit.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">android</td>
            <td className="text-left p-2">AndroidConfig</td>
            <td className="text-left p-2">
              Input only. Android specific options for messages sent through FCM
              connection server.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">webpush</td>
            <td className="text-left p-2">WebPushConfig</td>
            <td className="text-left p-2">
              Input only. Webpush protocol options.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">apns</td>
            <td className="text-left p-2">ApnsConfig</td>
            <td className="text-left p-2">
              Input only. Apple Push Notification Service specific options.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
          <tr className="border-b-2">
            <td className="text-left p-2">fcmOptions</td>
            <td className="text-left p-2">FCMOptions</td>
            <td className="text-left p-2">
              Input only. Template for FCM SDK feature options to use across all
              platforms.
            </td>
            <td className="text-left p-2">optional</td>
          </tr>
        </table>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">AndroidConfig:</div>
        <div>
          Refer&nbsp;
          <a
            className="text-blue-400"
            href="https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidConfig"
          >
            https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#AndroidConfig
          </a>
        </div>
        <div className="text-3xl py-3 font-extrabold">WebPushConfig:</div>
        <div>
          Refer&nbsp;
          <a
            className="text-blue-400"
            href=" https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#WebpushConfig"
          >
            https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#WebpushConfig
          </a>
        </div>
        <div className="text-3xl py-3 font-extrabold">ApnsConfig:</div>
        <div>
          Refer&nbsp;
          <a
            className="text-blue-400"
            href="https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#ApnsConfig"
          >
            https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages#ApnsConfig
          </a>
        </div>
        <div className="text-3xl py-3 font-extrabold">Dependencies (1)</div>
        <div>
          <a
            className="text-blue-400"
            href="https://www.npmjs.com/package/axios"
          >
            axios &nbsp;
          </a>
          <b>
            - Axios is a promise-based HTTP Client for node.js and the browser.
            It is isomorphic (= it can run in the browser and nodejs with the
            same codebase). On the server-side it uses the native node.js http
            module, while on the client (browser) it uses XMLHttpRequests.
          </b>
        </div>
        <div className="text-3xl py-3 font-extrabold">Dev Dependencies (9)</div>
        <div>
          The list of following Dev Dependencies packages are present in our
          communication framework.
        </div>
        <ul className="list-disc px-10 p-3">
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/@commitlint/cli"
            >
              @commitlint/cli
            </a>
            - commitlint helps your team adhering to a commit convention. By
            supporting npm-installed configurations it makes sharing of commit
            conventions easy.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/@commitlint/config-conventional"
            >
              @commitlint/config-conventional
            </a>
            - config-conventional is a standard based on the Angular convention.
            Create .commitlintrc.json, which extends the rules from
            config-conventional: Or export the rules in commitlint.config.js.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/@types/node"
            >
              @types/node
            </a>
            - This package contains type definitions for Node.js.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/concurrently"
            >
              concurrently
            </a>
            - Run multiple commands concurrently.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/git-cz"
            >
              git-cz
            </a>
            - It is used for generating a detailed commit description . It will
            prompt you to fill in any required fields, and your commit messages
            will be formatted according to the standards defined by project
            maintainers.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/husky"
            >
              husky
            </a>
            - It allows to run custom scripts against your repository.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/nodemon"
            >
              nodemon
            </a>
            - nodemon is a tool that helps develop node.js based applications by
            automatically restarting the node application when file changes in
            the directory are detected. nodemon does not require any additional
            changes to your code or method of development. nodemon is a
            replacement wrapper for node. To use nodemon, replace the word node
            on the command line when executing your script.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/rimraf"
            >
              rimraf
            </a>
            - The rimraf command is an alternative to the Linux command rm -rf.
            It allows you to do deep recursive deletion of files and folders.
          </li>
          <li className="py-2">
            <a
              className="text-blue-400"
              href="https://www.npmjs.com/package/typescript"
            >
              typescript
            </a>
            - is a strongly typed programming language that builds on
            JavaScript. One of the benefit is spotting common errors as you type
            the code.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default JustCommunication;
