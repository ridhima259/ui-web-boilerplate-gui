import React from 'react';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';
import register from '../assets/svg/Register_new_site.png';
import sitekey from '../assets/svg/Sitekey_LI.jpg';

const CaptchaGenerator = () => (
  <div>
    <Header
      title="CAPTCHA GENERATOR"
      subtitle="Easiest way to setup your Captcha Generator"
      showTitle={false}
      value=""
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
        <div className="text-3xl py-3 font-extrabold">Captcha Generator</div>
        <hr className="pb-1" />
        <p>
          CAPTCHA (Completely Automated Public Turing test to tell Computers and
          Humans Apart) is a type of security measure known as
          challenge-response authentication. A CAPTCHA test is made up of two
          simple parts: a randomly generated sequence of letters and/or numbers
          that appear as a distorted image, and a text box.
          <br />
          <br />
          reCAPTCHA is a free service from Google that helps protect websites
          from spam and abuse. A “CAPTCHA” is a turing test to tell human and
          bots apart. It is easy for humans to solve, but hard for “bots” and
          other malicious software to figure out.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites:</div>
        <div className="pb-3">
          To run this captcha-generator ,we need the followings:
        </div>
        <ul className="list-decimal px-10 pb-3">
          <li>
            <a className="text-blue-400" href="https://nodejs.org/en/download/">
              Node.js&nbsp;
            </a>
            and NPM
          </li>
          <li>Fibonalabs AWS access</li>
          <li>Codecommit access</li>
          <li>google recaptcha sitekey</li>
        </ul>
        <ul className="list-disc px-10 pb-3">
          <li>
            For Fibonalabs AWS login credentials and repository access please
            contact - Ms. Vidhya
          </li>
          <li>
            For Codecommit initial setup refer the following document
            -AWS_codecommit_Initial_setup.docx - Please contact - Ms. Vidhya
          </li>
          <li>For google recaptcha sitekey refer the following steps</li>
          <li>
            After you have a necessary access, Follow the steps as mentioned
          </li>
        </ul>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <hr className="pb-1" />
        <div className="font-bold">
          To run this recaptcha Install captcha-generator:
        </div>
        <div className="py-3 font-bold">Installation Command:</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>**npm i @fibonalabs/captcha-generator**</code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">
          Importing the Package:
        </div>
        <ul className="list-disc px-10 pb-3">
          <li>
            After installing the npm packages, import the package
            <span className="bg-gray-100 border p-2 mx-3">
              <code>**npm i @fibonalabs/captcha-generator**</code>
            </span>
          </li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            ```javascript
            <br />
            import &#123;(DistortedText, ImageCaptcha)&#125; from
            @fibonalabs/captcha-generator
            <br />
            ```
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Operations</div>
        <div>
          In app.tsx, we can trigger the success and failure event for Image and
          distortedText captcha.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            &#60;DistortedText
            <br />
            onSuccess= &#123;() =&gt; &#123;
            <br />
            alert(&apos;success text&apos;);
            <br />
            &#125;&#125;
            <br />
            onFailure= &#123;() =&gt; &#123;
            <br />
            alert(&apos;failure text&apos;);
            <br />
            &#125;&#125;
            <br />
            /&#62;
          </code>
        </div>
        <div className="py-3">
          For image captcha we need to copy the sitekey which was created and
          should update in the sitekey as
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>const sitekey = &apos;sitekey&apos;</code>
        </div>
        <div className="py-3">
          We can change &quot;light&quot; or &quot;dark&quot; theme.
        </div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            &#60;ImageCaptcha
            <br />
            siteKey= &#123;sitekey &#125;
            <br />
            theme=&apos;light&apos;
            <br />
            onSuccess= &#123;() =&gt; &#123;
            <br />
            alert(&apos;success image&apos;);
            <br />
            &#125;&#125;
            <br />
            onFailure= &#123;() =&gt; &#123;
            <br />
            alert(&apos;failure image&apos;);
            <br />
            &#125;&#125;
            <br />
            /&#62;
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">
          To create sitekey for google recaptcha :
        </div>
        <div className="pb-3 font-bold">
          1. Enter for register a new site -
          <a
            className="text-blue-400"
            href=" https://www.google.com/recaptcha/admin/create"
          >
            https://www.google.com/recaptcha/admin/create
          </a>
        </div>
        <img src={register} alt="register" />
        <ul className="list-disc px-7 py-3">
          <li>Enter a label for the project.</li>
          <li>Select the captcha type you want.</li>
          <li>Type domain name.</li>
          <li>Click submit.</li>
        </ul>
        <div className="pb-3 font-bold">
          2. Sitekey and Secretkey will be created.
        </div>
        <img src={sitekey} alt="sitekey" />
        <div className="text-3xl py-3 font-extrabold">Implementation:</div>
        <hr />
        <div className="py-3 font-bold">For distorted Text captcha:</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import React, &#123;(useState, useEffect)&#125; from
            &apos;react&apos;
            <br />
            import &apos;./distortedText.css&apos;
            <br />
            <br />
            function captchaGenerator() &#123;
            <br />
            var length: number = 5
            <br />
            var result: string = &apos;&apos;
            <br />
            var characters: string =
            <br />
            &apos;ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789&apos;
            <br />
            var charactersLength: number = characters.length
            <br />
            for (var i = 0; i &#60; length; i++) &#123;
            <br />
            result += characters.charAt(Math.floor(Math.random() *
            charactersLength))
            <br />
            &#125;
            <br />
            return result
            <br />
            &#125;
            <br />
            interface DistortedTextProps &#123;
            <br />
            onSuccess: () =&#62; void
            <br />
            onFailure: () =&#62; void
            <br />
            &#125;
          </code>
        </div>
      </div>
      <div>
        <div className="py-3 font-bold">For Image captcha:</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import React, &#123;(useState, useEffect)&#125; from
            &apos;react&apos;
            <br />
            <br />
            interface ImageCaptchaProps &#123;
            <br />
            onSuccess: () =&#62; void
            <br />
            onFailure: () =&#62; void
            <br />
            siteKey: string
            <br />
            theme?: &apos;dark&apos; | &apos;light&apos;
            <br />
            &#125;
            <br />
            <br />
            const ImageCaptcha: React.FC&#60;ImageCaptchaProps&#62; = ( &#123;
            <br />
            siteKey,
            <br />
            onSuccess,
            <br />
            onFailure,
            <br />
            theme = &apos;light&apos;
            <br />
            &#125;) =&#62; &#123;
            <br />
            ;(window as any).onloadCallback = () =&#62; &#123;
            <br />
            onSuccess()
            <br />
            &#125;
            <br />
            ;(window as any).failure = () =&#62; &#123;
            <br />
            onFailure()
            <br />
            &#125;
            <br />
            useEffect(() =&#62; &#123;
            <br />
            const script = document.createElement(&apos;script&apos;)
            <br />
            script.src = &apos;https://www.google.com/recaptcha/api.js&apos;
            <br />
            script.async = true
            <br />
            document.body.appendChild(script)
            <br />
            &#125;, [])
            <br />
            <br />
            return (
            <br />
            &#60;div
            <br />
            id=&apos;captcha&apos;
            <br />
            className=&apos;g-recaptcha&apos;
            <br />
            data-theme=&#123;theme&#125;
            <br />
            data-size=&apos;normal&apos;
            <br />
            data-sitekey=&#123;siteKey&#125;
            <br />
            data-callback=&apos;onloadCallback&apos;
            <br />
            data-expired-callback=&apos;failure&apos;
            <br />
            /&#62;
            <br />
            )
            <br />
            &#125;
            <br />
            <br />
            export default ImageCaptcha
          </code>
        </div>
      </div>
    </div>
  </div>
);

export default CaptchaGenerator;
