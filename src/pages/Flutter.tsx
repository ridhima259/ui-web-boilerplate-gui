/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import codeartifactlogin from '../assets/svg/codeartifact_login.png';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';

const Flutter = () => (
  <div>
    <Header title="FLUTTER" subtitle="Easiest way to setup your Flutter" />
    <a
      href="/"
      title="back"
      className=" p-5 absolute bg-blue-600 rounded-full top-24 left-3"
    >
      <img src={back} alt="text" />
    </a>
    <div className="mx-10 pb-5 pt-40">
      <div>
        <div className="text-3xl py-3 font-extrabold">FLUTTER</div>
        <hr className="pb-1" />
        <p>
          Boilerplate contains all you need to start your next Flutter project.
          Simple, robust, well-organized, all you need to do is clone, install
          and you&apos;re ready to start.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites</div>
        <hr className="pb-1" />
        <div>To run this Flutter, we need the followings:</div>
        <div>
          <ul className="list-decimal p-5">
            <li>Flutter SDK</li>
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
            https://git-codecommit.ap-south-1.amazonaws.com/v1/repos/ui-mobile-flutter-boiler-plate
          </code>
        </div>
        <ul className="list-disc px-5 py-3">
          <li>
            After cloning the repo, install all the dependencies using the
            following command:
          </li>
        </ul>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>flutter pub get</code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Folder Structure:</div>
        <div className="py-2">
          In the Root, we have src folder. Inside src folder we have,
        </div>
        <ul className="list-disc px-5 py-3">
          <li>assets</li>
          <li>lib</li>
          <li>component</li>
          <li>constants</li>
          <li>models</li>
          <li>navigation</li>
          <li>providers</li>
          <li>screens</li>
          <li>guide</li>
        </ul>
        {/* <div>
          <div className="text-xl py-3 font-extrabold">API</div>
          <p className="pb-2">
            All the HTTP methods, SWR configurations are inside this folder.
          </p>
        </div> */}
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
          <div className="text-xl py-3 font-extrabold">LIB</div>
          <p className="pb-2">
            This folder contains the project structure such as
            <b> main.dart </b>,<b> components </b>,<b> constants </b>,
            <b> models </b>,<b> nav </b>,<b> providers </b>
            and
            <b> screens </b>.
          </p>
        </div>
        <div>
          <div className="text-xl py-3 font-extrabold">COMPONENT</div>
          <p className="pb-2">
            The common components like
            <b> fastImage </b>
            is inside this folder.
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
          <div className="text-xl py-3 font-extrabold">GUIDE</div>
          <p className="pb-2">
            This folder contains lot of utility modules, which are useful
            through out the project.
          </p>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">LIBRARY:</div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Http</div>
          <p className="pb-2">
            A composable, Future-based library for making HTTP requests.
          </p>
          <div className="text-xl py-3 font-extrabold">where to find:</div>
          <p className="pb-2">/lib/provider/api.dart</p>
          <div className="text-3xl py-3 font-extrabold">Usage</div>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              import &apos;package:http/http.dart&apos; as http;
              <br />
              <br />
              var url =
              Uri.parse(&apos;https://example.com/whatsit/create&apos;);
              <br />
              var response = await http.post(url, body: &#123;&apos;name&apos;:
              &apos;doodle&apos;, &apos;color&apos;: &apos;blue&apos;&#125;);
              <br />
              print(&apos;Response status:
              $&#123;response.statusCode&#125;&apos;);
              <br />
              print(&apos;Response body: $&#123;response.body&#125;&apos;);
            </code>
          </div>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">FireBase</div>
          <p className="pb-2">
            Firebase Configuration for Android, iOS, MacOS and Web
          </p>

          <div className="text-3xl py-3 font-extrabold">Usage</div>

          <p>Run the following command to install `Flutterfire_cli` :</p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>dart pub global activate flutterfire_cli</code>
          </div>

          <p>Then install firebase cli tools :</p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>npm install -g firebase-tools</code>
          </div>

          <p>
            Now Sign-in in the firebase account and select the account with
            which you created the project:
          </p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>firebase login</code>
          </div>

          <p>Open terminal and go to project directory</p>
          <p>
            Run the `configure` command, select a Firebase project and platforms
          </p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>flutterfire configure</code>
          </div>
          <p>
            The configuration command will guide you through a number of
            processes:
            <br /> 1. Selecting a Firebase project (based on the `.firebaserc`
            file or from the Firebase Console). <br />
            2. Prompt what platforms (e.g. Android, iOS, macOS & web) you would
            like configuration for.
            <br /> 3. Identify which Firebase applications for the chosen
            platforms should be used to extract configuration for. By default,
            the CLI will attempt to automatically match Firebase apps based on
            your current project configuration.
            <br /> 4. Generate a `firebase_options.dart` file in your project
          </p>

          <p> Now, initialization Firebase in `main.dart` :</p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              import &apos;package:firebase_core/firebase_core.dart&apos;;
              <br />
              import &apos;firebase_options.dart&apos;;
            </code>
          </div>

          <p>
            Next, within the `main` function, ensure `WidgetsFlutterBinding` is
            initialized and then initialize Firebase:
          </p>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              void main() async &#123; <br />
              WidgetsFlutterBinding.ensureInitialized(); <br />
              await Firebase.initializeApp( <br /> options:
              DefaultFirebaseOptions.currentPlatform, <br />
              ); <br />
              runApp(MyApp()); <br /> &#125;
            </code>
          </div>

          <ul className="list-disc px-7 py-3">
            <li>
              Please refer the attached document for information:
              <a
                className="text-blue-400 ml-1"
                href=" https://firebase.flutter.dev/docs/overview"
              >
                https://firebase.flutter.dev/docs/overview
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-3xl py-3 font-extrabold">Provider</div>
          <p className="pt-2">
            It is a state management tool provided by Flutter.
          </p>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Flutter Permission</div>
        <p className="pb-2">
          A unified permissions lib for Flutter on iOS, Android and Windows.
        </p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">/lib/constants/app_constant.dart</p>
        <div className="text-xl py-3 font-extrabold">API Reference</div>
        <p className="pb-2">
          For calling permission, during accessing native modules
        </p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            await <br />
            requestAppPermission(permissionTypes)
          </code>
        </div>
        <div className="mt-5">
          <table className="border-2">
            <tr className="border-b-2">
              <th className="py-2">Type</th>
              <th className="py-2">Description</th>
              <th className="py-2"> </th>
            </tr>
            <tr className="border-b-2">
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
              android.permission.READ_CONTACTS
              <br />
              <br />
              android.permission.WRITE_CONTACTS
              <br />
              android.permission.GET_ACCOUNTS
              <br />
              android.permission.READ_EXTERNAL_STORAGE
              <br />
              android.permission.WRITE_EXTERNAL_STORAGE
              <br />
              android.permission.CAMERA
              <br />
              android.permission.SEND_SMS, android.permission.RECEIVE_SMS,
              android.permission.READ_SMS, android.permission.RECEIVE_WAP_PUSH,
              android.permission.RECEIVE_MMS
              <br />
              android.permission.READ_PHONE_STATE,
              android.permission.CALL_PHONE, android.permission.ADD_VOICEMAIL,
              android.permission.READ_CALL_LOG,
              android.permission.WRITE_CALL_LOG,
              android.permission.BIND_CALL_REDIRECTION_SERVICE
              android.permission.USE_SIP ,
              <br />
              android.permission.READ_CALENDAR ,
              android.permission.WRITE_CALENDAR
              <br />
              android.permission.ACCESS_FINE_LOCATION,
              android.permission.ACCESS_COARSE_LOCATION,
              android.permission.ACCESS_BACKGROUND_LOCATION
              <br />
              android.permission.RECORD_AUDIO
              <br />
              android.permission.BODY_SENSORS
              <br />
              android.permission.ACCESS_MEDIA_LOCATION
              <br />
              android.permission.ACTIVITY_RECOGNITION
              <br />
              android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
              <br />
              android.permission.BLUETOOTH, android.permission.BLUETOOTH_SCAN,
              android.permission.BLUETOOTH_ADVERTISE,
              android.permission.BLUETOOTH_CONNECT
              <br />
              android.permission.MANAGE_EXTERNAL_STORAGE
              <br />
              android.permission.SYSTEM_ALERT_WINDOW
              <br />
              android.permission.REQUEST_INSTALL_PACKAGES
              <br />
              android.permission.ACCESS_NOTIFICATION_POLICY
              <br />
            </code>
          </div>
          <div className="text-xl pt-6 font-extrabold">For iOS:</div>
          <div className="bg-gray-100 border p-3 mt-3">
            <code>
              PERMISSION_EVENTS <br />
              PERMISSION_REMINDERS <br />
              PERMISSION_CONTACTS <br />
              PERMISSION_CAMERA <br />
              PERMISSION_MICROPHONE <br />
              PERMISSION_SPEECH_RECOGNIZER <br />
              PERMISSION_PHOTOS <br />
              PERMISSION_NOTIFICATIONS <br />
              PERMISSION_MEDIA_LIBRARY <br />
              PERMISSION_SENSORS <br />
              PERMISSION_BLUETOOTH <br />
              PERMISSION_APP_TRACKING_TRANSPARENCY <br />
              PERMISSION_CRITICAL_ALERTS <br />
            </code>
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Splash</div>
        <p className="pb-2">Splash Screen for flutter.</p>
        <div className="text-xl py-3 font-extrabold">where to find:</div>
        <p className="pb-2">pubspec.yaml</p>
        <div className="text-3xl py-3 font-extrabold">Usage</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            flutter_native_splash:
            <br />
            color: &quot;#42a5f5&quot;
            <br />
            background_image: &quot;assets/background.png&quot;
          </code>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Sentry</div>
        <p className="pb-2">
          Support to native crashes through Sentry native SDKs: (Android and
          iOS).
        </p>
        <div className="text-3xl py-3 font-extrabold">Usage</div>
        <p>Add the below code in `main.dart` for sentry usage.</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &apos;package:sentry/sentry.dart&apos;;
            <br />
            await Sentry.init( <br />
            (options) &#123; options.dsn = <br />
            &apos;https://9934c532bf8446ef961450973c898537@o447951.ingest.sentry.io/5428562&apos;;{' '}
            <br />
            &#125;, appRunner: () ={'>'} runApp( <br />
            MultiProvider(providers: [ <br />
            ChangeNotifierProvider(create: (_) ={'>'} ApiData()) <br />
            ], <br />
            child: const MyApp(), <br />) <br />
            ), <br />
            );
          </code>
        </div>
        <p> Use Sentry in try catch block.</p>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &apos;package:sentry/sentry.dart&apos;;
            <br />
            try &#123; <br />
            &#125; catch (exception, stackTrace) &#123; <br /> await
            Sentry.captureException(exception, stackTrace: stackTrace);
            <br /> &#125;
          </code>
        </div>
      </div>
    </div>
  </div>
);

export default Flutter;
