import React from 'react';
import codeartifactlogin from '../assets/svg/codeartifact_login.png';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';

const PdfGenerator = () => (
  <div>
    <Header
      title="PDF GENERATOR"
      subtitle="Easiest way to setup your PDF Generator"
      showTitle={false}
      onTitleChanged={() => {}}
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
        <div className="text-3xl py-3 font-extrabold">PDF Generator</div>
        <hr className="pb-1" />
        <p>
          Pdf generator is a Pdf document generation library for Node and the
          browser that makes creating complex, multi-page, printable documents
          easy both with server and server less. The API embraces chain-ability,
          and includes both low level functions as well as abstractions for
          higher level functionality. These API is designed to be simple, so
          generating complex documents is often as simple as a few function
          calls. This Module can run both in server and serverless as per the
          developer need. It will convert the HTML into the Pdf format.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites</div>
        <hr className="pb-1" />
        <div>
          To run this comment module using AWS Lambda Functions and Layers with
          serverless, we need the followings:
        </div>
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
        <div>
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
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <hr className="pb-1" />
        <ul className="list-disc px-5 py-3">
          <li>First, clone the repo</li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            [be-pdf-gen](https://ap-south-1.console.aws.amazon.com/codesuite/codecommit/repositories/be-pdf-gen/browse?region=ap-south-1)
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
        <div className="text-3xl py-3 font-extrabold">Layers:</div>
        <p>
          We will be using an html-pdf library to convert HTML to PDF. The
          html-pdf library uses PhantomJS internally. so this executable must be
          installed on your system. Executables folder contains font files,
          low-level binaries and the compiled PhantomJS executable file. For
          more fonts add .ttf font files in executable folder and redeploy the
          layer and the redeploy the other service so the function is pointing
          to the latest Lambda Layer. You can refer executables folder for more
          info. Lambda layer contains necessary low-level binaries, fonts and
          the compiled PhantomJS executable file.
        </p>
        <ul className="list-disc px-6 py-5">
          <li>
            You can add any font files of your choice in the executables folder
            and edit the serverless.yml file according to the region you use.
          </li>
        </ul>
        <div>The following set of code are used in the serverless.yml;</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code className="language-markup  ">
            serverless/layers/serverless.yml
            <br />
            service: executables-layer
            <br />
            provider:
            <br />
            name: aws :
            <br />
            stage: &#36;&#123;opt:stage, &apos;dev&apos;&#125;
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Deployment:</div>
        <ul className="list-disc px-5 py-3">
          <li>Deploy the layer first using the following command:</li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>sls deploy --stage dev</code>
        </div>
        <div>
          After successful deployment, your layer is now ready to use with the
          function.
        </div>
        <ul className="list-disc px-5 py-3">
          <li>
            Once the deployment of the layer is done you need to write the
            function to convert HTML to PDF. The best way would be keeping your
            layer and your function in separate stacks. so created a separate
            folder for function and will deploy that separately.
          </li>
        </ul>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">
          Importing the Package:
        </div>
        <ul className="list-disc px-5 py-3">
          <li>
            After installing the npm packages, import the package
            **&quot;@fibonalabs/pdf-generator&quot;**.
          </li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            ```javascript
            <br />
            serverless/htmlToPdf/handler.js
            <br />
            import generatePDF from &quot;@fibonalabs/pdf-generator&quot;
            <br />
            ```
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Setting Environment</div>
        <div>
          The following environment variables must be set before the function.
        </div>
        <div className="py-3">
          <b>Note:</b>
          If not, set the pdf will not be generated or else the pdf will contain
          black dots.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            ```javascript
            <br />
            serverless/htmlToPdf/handler.js
            <br />
            <br />
            <br />
            process.env.PATH = `&#36;&#123;process.env.PATH&#125;:/opt`
            <br />
            process.env.FONTCONFIG_PATH = &apos;/opt&apos;
            <br />
            process.env.LD_LIBRARY_PATH = &apos;/opt&apos;
            <br />
            ```
          </code>
        </div>
        <ul className="list-disc px-7 py-3">
          <li>
            Reach out to the link, to know more about the AWS Environment
            Variables:
            <a
              className="text-blue-400"
              href=" https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html"
            >
              https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html
            </a>
          </li>
        </ul>
        <div className="py-3">
          <b>Note : </b>
          Use HTML Minify tool to minify your HTML code [HTMLMinify] (
          <a className="text-blue-400" href="https://www.willpeavy.com/tools/">
            https://www.willpeavy.com/tools/
          </a>
          minifier/) and use backslash(&apos;\&apos;) for words enclosed inside
          single quotes, for example:font-family: \&apos;Helvetica Neue\&apos;.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <pre>
            <code className="language-javascript">
              serverless/htmlToPdf/handler.js
            </code>
          </pre>
        </div>
        <div className="py-3">
          <b>
            You can also edit the serverless.yml file based on your
            requirements.
          </b>
        </div>
        <div className="py-3">Here is the yml file for your reference:</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            serverless/htmlToPdf/serverless.yml
            <br />
            service: htmlToPdf
            <br />
            provider:
            <br />
            name: aws
            <br />
            runtime: nodejs12.x
            <br />
            stage: &#36;&#123;opt:stage, &apos;dev&apos;&#125;
            <br />
            role: arn:aws:iam::650571980132:role/lambda-pdf-gen-execution-role
            <br />
            stackName: htmltopdf-generate
            <br />
            environment:
            <br />
            S3_BUCKET: htmltopdf-generate-bucket
            <br />
            region: &#36;&#123;opt:region, &apos;ap-south-1&apos;&#125;
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Deployment</div>
        <div>
          As said earlier, we should do the followings for the deployment:
        </div>
        <div className="py-3">
          <b>Step 1: </b>
          First deploy the layer.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            cd layers/
            <br />
            sls deploy
          </code>
        </div>
        <div className="py-3">
          <b>Step 2: </b>
          Deploy the main service that will be converting html to pdf .Make sure
          that your current directory has yml file.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            cd htmlToPdf/
            <br />
            sls deploy
          </code>
        </div>
        <div className="py-3">
          <b>Note: </b>
          For more fonts, add .ttf font files in executable folder and redeploy
          the layer and the redeploy the other service so the function is
          pointing to the latest Lambda Layer.
        </div>
      </div>
      <div>
        <div className="text-3xl pt-3 font-extrabold">
          HTML To PDF using the package (Server)
        </div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisite</div>
        <ul className="list-decimal px-5">
          <li>
            <a className="text-blue-400" href="https://nodejs.org/en/download/">
              Node.js
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <div>Since it is the server based process, do the followings:</div>
        <ul className="list-disc px-5 py-3">
          <li>Install all dependencies</li>
        </ul>
        <div className="bg-gray-100 border p-3">
          <code>npm install @fibonalabs/pdf-generator</code>
        </div>
        <div className="py-3">
          By default, npm install will install all modules listed as
          dependencies in package.json.
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Generate PDF</div>
        <div className="pb-3">
          <b>Note : </b>
          You can generate the PDF by importing the package .Minify your HTML
          code using [HTMLMinify] (
          <a className="text-blue-400" href="https://www.willpeavy.com/tools/">
            https://www.willpeavy.com/tools/
          </a>
          minifier/) and use backslash(&apos;\&apos;) for words enclosed inside
          single quotes, for example:font-family: \&apos;Helvetica Neue\&apos;.
        </div>
        <div className="bg-gray-100 border p-3">
          <code className="language-javascript">
            import generatePDF from &quot;@fibonalabs/pdf-generator&quot;;
            <br />
            const run = async () =&gt; &#123;
            <br />
            console.log(&quot;Running&quot;);
            <br />
            const html =
          </code>
        </div>
        <div className="py-5">
          By this method, you can work in the server based mode. These are the
          two methods to work with the pdf generator which will create HTML to
          Pdf format.
        </div>
      </div>
    </div>
  </div>
);

export default PdfGenerator;
