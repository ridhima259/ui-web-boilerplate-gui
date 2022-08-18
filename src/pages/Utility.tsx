import React from 'react';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';
// import { title } from '../assets/data/content';
// import codeartifactlogin from '../assets/svg/codeartifact_login.png';

const utility = () => (
  <div>
    <Header
      title="UTILITY"
      subtitle="Easiest way to setup your UTILITY"
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
        <div className="text-3xl py-3 font-extrabold">Installation</div>
        <hr className="pb-1" />
        <div className="bg-gray-100 border p-3 mt-3">
          <code>npm install @fibonalabs/utility</code>
        </div>
        <div className="py-3">
          By default, npm install will install all modules listed as
          dependencies in package.json.
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Number</div>
        <hr className="pb-1" />
        <div className="text-xl py-3 font-bold">digitsAfterDecimalPoint</div>
        <p className="pb-3">
          This function converts a number into a string, rounding to a specified
          number of decimals. The number is rounded if necessary, and the
          fractional part is padded with zeros if necessary so that it has the
          specified length.
        </p>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;digitsAfterDecimalPoint&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            digitsAfterDecimalPoint(inputValue:number,digits:number)
            <br />
            <br />
            digitsAfterDecimalPoint(100,3)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">currencyFormatter</div>
        <p>
          This function converts a number into a string, using a local language
          format.This is also used as comma separator based on locale-specific
          numeric representation.Currency Symbols are also generated based on
          the locale.
        </p>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;currencyFormatter&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            currencyFormatter(inputValue: number,currencySymbol:
            currency,locale?: string)
            <br />
            <br />
            currencyFormatter(123456.789,&apos;USD&apos;)
            <br />
            currencyFormatter(123456.789,&apos;EUR&apos;,&apos;fr-FR&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">roundingOffDigits</div>
        <p>
          This function is used to format a number into a specified length.The
          length is specified inside the parentheses after the methods name.This
          function counts all numbers, not only decimals.
        </p>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;roundingOffDigits&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            roundingOffDigits(inputValue: number,precision: number)
            <br />
            <br />
            roundingOffDigits(13.556,2)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">simpleUnits</div>
        <div>This function formats a number to given simple units.</div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;simpleUnits&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            simpleUnits(inputValue: number,unitValue: unit,locale?: string )
            <br />
            <br />
            simpleUnits(45,&apos;liter&apos;)
            <br />
            simpleUnits(45,&apos;liter&apos;,&apos;en-IN&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">percentageConverter</div>
        <div>
          This function is used for percentage conversion of given number.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;percentageConverter&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            percentageConverter(inputValue: number,locale?: string)
            <br />
            <br />
            percentageConverter(5556.7)
            <br />
            percentageConverter(5556.7,&apos;en-IN&apos;)
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-bold">OTP</div>
        <hr className="pb-1" />
        <div className="text-xl py-3 font-bold">generateOTP</div>
        <div>
          This function is used to generate OTP within specified digits.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;generateOTP&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            generateOTP(noOfDigits: number)
            <br />
            <br />
            generateOTP(6)
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-bold">DateTime</div>
        <hr className="pb-1" />
        <div className="text-xl py-3 font-bold">formatDate</div>
        <div>This function is used to format a date in a specified manner.</div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;formatDate&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            formatDate(date: string, dateFormat: string)
            <br />
            <br />
            formatDate(&apos;2020-01-13&apos;, &apos;DD/MM/YYYY&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">findAge</div>
        <div>To predict the age from Date Of Birth.</div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;findAge&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            findAge(dob: string)
            <br />
            <br />
            findAge(&apos;1991-10-13&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getAgeToday</div>
        <div>To calculate age in years, months and days.</div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getAgeToday&#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getAgeToday(dob: string)
            <br />
            <br />
            findAgeToday(&apos;1991-10-13&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">findDiffBetweenDates</div>
        <div>
          To calculate the difference in years,months and days between two dates
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;findDiffBetweenDates &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            findDiffBetweenDates(finalDate:string,initialDate:string)
            <br />
            <br />
            findDiffBetweenDates(&apos;2011-10-13&apos;,&apos;2014-10-13&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getDiffInDays</div>
        <div>
          This function is used to find the difference in days between two
          dates.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getDiffInDays &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getDiffInDays(finalDate: string, initialDate: string)
            <br />
            <br />
            getDiffInDays(&apos;2019-01-25&apos;,&apos;2018-06-05&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getDiffInHours</div>
        <div>
          This function is used to find the difference in hours between two
          dates.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getDiffInHours &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getDiffInHours(finalDate: string, initialDate: string)
            <br />
            <br />
            getDiffInHours(&apos;2019-01-25&apos;,&apos;2018-06-05&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getDiffInMinutes</div>
        <div>
          This function is used to find the difference in minutes between two
          dates.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getDiffInMinutes &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getDiffInMinutes(finalDate: string, initialDate: string)
            <br />
            <br />
            getDiffInMinutes(&apos;2019-01-25&apos;,&apos;2018-06-05&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getDiffInSeconds</div>
        <div>
          This function is used to find the difference in minutes between two
          dates.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getDiffInSeconds &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getDiffInSeconds (finalDate: string, initialDate: string)
            <br />
            <br />
            getDiffInSeconds (&apos;2019-01-25&apos;,&apos;2018-06-05&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">getDiffInMonths</div>
        <div>
          This function is used to find the difference in months between two
          dates.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;getDiffInMonths &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            getDiffInMonths (finalDate: string, initialDate: string)
            <br />
            <br />
            getDiffInMonths (&apos;2019-01-25&apos;,&apos;2018-06-05&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">findTotalDaysInMonth</div>
        <div>
          This function is used to find the total number of days in a month.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;findTotalDaysInMonth &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            findTotalDaysInMonth(date: string)
            <br />
            <br />
            findTotalDaysInMonth (&apos;2019-01-25&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">utcToLocalConverter</div>
        <div>This function is used to convert UTC to Local Time. </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;utcToLocalConverter &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            utcToLocalConverter(date: string, formatType: string)
            <br />
            <br />
            utcToLocalConverter(&apos;August 19, 1975 23:15:30 GMT+00:00&apos;,
            &apos;hh:mm:ss A&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">userTimeZone</div>
        <div>
          This function is used to find the current time and date in different
          timezone.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;userTimeZone &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            userTimeZone(userzone: string, formatType: string)
            <br />
            <br />
            userTimeZone(&apos;America/New_York&apos;, &apos;DD/MM/YYYY hh:mm:ss
            A z&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">guessUserZone</div>
        <div>
          This function is used to Predict the user timezone and finds the
          current time and date.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;guessUserZone &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            guessUserZone(formatType: string)
            <br />
            <br />
            guessUserZone(&apos;DD/MM/YYYY hh:mm:ss A z&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">timeDiff</div>
        <div>
          This function is used to calculate the difference in time w.r.t
          days,hours,minutes and seconds.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;timeDiff &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            timeDiff(startTime: string, endTime: string)
            <br />
            <br />
            timeDiff(&apos;March 1, 2002 11:10:00&apos;, &apos;March 1,2002
            12:10:01&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">timeDiffFromNow</div>
        <div>
          This function is used to calculate the difference in time w.r.t
          days,hours,minutes and seconds from current.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;timeDiffFromNow &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            timeDiffFromNow(startTime: string)
            <br />
            <br />
            timeDiffFromNow(&apos;September 27, 2021 11:10:00&apos;)
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-bold">Array</div>
        <hr className="pb-1" />
        <div className="text-xl py-3 font-bold">removeDuplicates</div>
        <div>
          This function is used to remove duplicate values from an array of
          objects.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;removeDuplicates &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            removeDuplicates(arr: any,key: string)
            <br />
            <br />
            removeDuplicates(cars, &apos;color&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">findOcc</div>
        <div>
          This function is used to find the occurence of given key value in an
          array of objects.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;findOcc &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            findOcc(arr: any,key: string)
            <br />
            <br />
            findOcc(cars, &apos;color&apos;)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">onlyUnique</div>
        <div>This function is used to list the unique values in the array.</div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;onlyUnique &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            onlyUnique(arr: any)
            <br />
            <br />
            onlyUnique(num)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">sortArrayAsc</div>
        <div>
          This function is used to sort the given array in ascending order.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;sortArrayAsc &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            sortArrayAsc(arr: any)
            <br />
            <br />
            sortArrayAsc(num)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">sortArrayDesc</div>
        <div>
          This function is used to sort the given array in descending order.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;sortArrayDesc &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            sortArrayDesc(arr: any)
            <br />
            <br />
            sortArrayDesc(num)
          </code>
        </div>
        <div className="text-xl py-3 font-bold">valueExist</div>
        <div>
          This function is used to check if a value is present in an array of
          objects.
        </div>
        <div className="text-xl pt-3 font-bold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;valueExist &#125; from
            &apos;@fibonalabs/utility-component&apos;
            <br />
            valueExist(arr: any, key: string,value: string)
            <br />
            <br />
            valueExist(cars, &apos;color&apos;, &apos;red&apos;)
          </code>
        </div>
      </div>
    </div>
  </div>
);

export default utility;
