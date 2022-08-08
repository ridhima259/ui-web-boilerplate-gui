import React from 'react';
import codeartifactlogin from '../assets/svg/codeartifact_login.png';
import back from '../assets/svg/back-arrow.svg';
import Header from '../components/header';

const Commentmodule = () => (
  <div>
    <Header
      title="COMMENT MODULE"
      subtitle="Easiest way to setup your Comment Module"
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
        <div className="text-3xl py-3 font-extrabold">Comment Module</div>
        <hr className="pb-1" />
        <div className="text-3xl py-3 font-extrabold">BE Comment Module</div>
        <p>
          <b>Comment Module</b>
          is the utility that can be used to achieve nested comments which can
          help you to define approach of having comments on various post,images
          and etc.
        </p>
        <div className="text-3xl py-3 font-extrabold">
          How BE Comment Module Works
        </div>
        <p>
          Comment Module contains all you needs to have in your project. Very
          Simple, robust, well-Organized, all you need to do is install and
          start use of it. Using this utility you can give your project a very
          well managed comment utility based on your requirement.
        </p>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Pre-requisites:</div>
        <ul className="list-disc px-10 pb-3">
          <li>Fibonalabs AWS access</li>
          <li>Codecommit access</li>
          <li>NodeJS and NPM</li>
        </ul>
        <div className="py-3">
          For Fibonalabs AWS login credentials and repository access please
          contact - Ms. Vidhya
        </div>
        <div className="py-3">
          For Codecommit initial setup refer the following document &nbsp;
          <a
            className="text-blue-400"
            href="http://project.fibonalabs.com/attachments/53/AWS_codecommit_Initial_setup.docx"
          >
            -AWS_codecommit_Initial_setup.docx
          </a>
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Getting Started</div>
        <div>
          After you have the access, open your terminal, and follow the below
          steps to login to aws codeartifact:
        </div>
        <div className="text-3xl py-3 font-extrabold">AWS Login Command</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            aws codeartifact login --tool npm --repository fibonalabs --domain
            dev-fibonalabs --domain-owner 650571980132
          </code>
        </div>
        <ul className="list-disc px-5 py-4">
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
        <div className="py-3">
          Once you have given the proper repository name, domain name & domain
          owner id. The npm will be successfully configured to use AWS
          CodeArtifact repository and shows the below output.
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Installation Command</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>npm install @fibonalabs/comment-module</code>
        </div>
        <div>
          By default, npm install will install all modules listed as
          dependencies in package.json.
        </div>
        <div className="text-3xl py-3 font-extrabold">Database Connection</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            import &#123;(Comment, CommentRepository) &#125; from
            &apos;@fibonalabs/comment-module&apos;
            <br />
            <br />
            export const typeorm = createConnection(&#123;
            <br />
            type: &apos;mysql&apos;,
            <br />
            host: &apos;hostname&apos;,
            <br />
            port: &apos;portnumber&apos;,
            <br />
            username: &apos;username&apos;,
            <br />
            password: &apos;password&apos;,
            <br />
            database: &apos;databasename&apos;,
            <br />
            synchronize: true,
            <br />
            logging: false,
            <br />
            entities: [Comment],
            <br />
            migrations: [&apos;src/migration/**/*.ts&apos;],
            <br />
            cli: &#123;
            <br />
            migrationsDir: &apos;src/migration&apos;,
            <br />
            &#125;,
            <br />
            &#125;)
          </code>
        </div>
        <div className="pt-3">
          The above code have one import statement which can import the packages
          which are in downloaded when you have installed the comment-module.
        </div>
        <div className="py-3">
          Second we have connection for database here, so as per the attributes
          are define in the createConnection function you need to filled all
          among given attributes like type(which type of database you are going
          to use for your project), host(Hostname of your database), port(port
          number of your running database), username and password(username and
          password if required), database(database name must required). This
          changes are enough for creating database connection.
        </div>
      </div>
      <div>
        <div className="text-3xl py-3 font-extrabold">Operations</div>
        <hr className="pb-1" />
        <div className="text-3xl pt-3 font-extrabold">Add Comments</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            let commentRepository =
            <br />
            connection.getCustomRepository(CommentRepository)
            <br />
            let comments = await commentRepository.addComments(&#123;
            <br />
            name: &quot;demoname&quot;,
            <br />
            message: &quot;demomessage&quot;,
            <br />
            parent: 1,
            <br />
            postId: 1 //non mendetory
            <br />
            &#125;)
          </code>
        </div>
        <div className="py-3">
          This function is use for inserting comments into the database. For
          that you need to give the payload which mentioned below.
        </div>
        <div>
          &#123;
          <br />
          <br />
          &quot;name&quot;:&quot;string&quot;,
          <br />
          <br />
          &quot;message&quot;:&quot;String&quot;,
          <br />
          <br />
          &quot;parent&quot;: &quot;number || null&quot;,
          <br />
          <br />
          &quot;postId&quot;: &quot;number || null&quot;
          <br />
          <br />
          &#125;
        </div>
        <div className="text-3xl pt-3 font-extrabold">Get All Comments</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            let comments = await commentRepository.findAllComments()
            <br />
            console.log(&apos;All comments from the db: &apos;, comments)
            <br />
            res.json(comments)
            <br />
            &#125;)
          </code>
        </div>
        <div className="pt-3">
          This function is use to get all the comment which are inserted in the
          database.
        </div>
        <div className="text-3xl pt-3 font-extrabold">Get Specific Comment</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            let comments = await
            commentRepository.findCommentById(req.params.id)
            <br />
            console.log(&apos;Comment from the database: &apos;, comments)
            <br />
            res.json(comments)
            <br />
            &#125;)
          </code>
        </div>
        <div className="pt-3">
          This function is use to get specific comment which is inserted in the
          database. For that you need to give parameter value for which comment
          you want to get record of.
        </div>
        <div className="text-3xl pt-3 font-extrabold">Update Comment</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            const results = await commentRepository.updateComment(req.params.id
            , &quot;hey&quot;);
            <br />
            return res.send(results);
            <br />
            &#125;)
          </code>
        </div>
        <div className="py-3">
          This function is use to update to existing comment which is inserted
          in the database. For that you need to give id of your specific comment
          as parameter and payload should be mentioned below.
        </div>
        <div>
          &#123;
          <br />
          <br />
          &quot;name&quot;:&quot;updated name&quot;,
          <br />
          <br />
          &quot;message&quot;:&quot;updated comment&quot;,
          <br />
          <br />
          &quot;parent&quot;: &quot;number || null&quot;,
          <br />
          <br />
          &quot;postId&quot;: &quot;number || null&quot;
          <br />
          <br />
          &#125;
        </div>
      </div>
      <div>
        <div className="text-3xl pt-3 font-extrabold">Delete Comment</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            const results = await
            commentRepository.deleteComment(req.params.id);
            <br />
            return res.send(results);
            <br />
            &#125;)
          </code>
        </div>
        <div className="py-3">
          This function is use to delete the specific comment which is inserted
          in the database. For this you need to give id of your comment which
          you want to delete as parameter.
        </div>
        <div className="text-3xl pt-3 font-extrabold">Like Comment</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            const results = await commentRepository.addLike(req.params.id);
            <br />
            return res.send(results);
            <br />
            &#125;)
          </code>
        </div>
        <div className="py-3">
          This function is use to add like to the specific comment. For this you
          need to give id of your comment.
        </div>
        <div className="text-3xl pt-3 font-extrabold">Dislike Comment</div>
        <div className="bg-gray-100 border p-3 mt-3">
          <code>
            typeorm
            <br />
            .then(async (connection) =&#62; &#123;
            <br />
            let commentRepository =
            connection.getCustomRepository(CommentRepository)
            <br />
            const results = await commentRepository.removeLike(req.params.id);
            <br />
            return res.send(results);
            <br />
            &#125;)
          </code>
        </div>
        <div className="py-3">
          This function is use to dislike the specific comment. For this you
          need to give id of your comment.
        </div>
      </div>
    </div>
  </div>
);

export default Commentmodule;
