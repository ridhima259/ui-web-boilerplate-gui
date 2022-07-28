import React, { useState } from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../components/header';
// import twitter from '../assets/svg/twitter.svg';
import Reset from '../assets/svg/reset.svg';
import { addModuleData } from '../assets/data/content';

const AddModule = () => {
  const [addModal, showModal] = useState(false);
  // prettier-ignore
  const [edState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>,
  ) => {
    setEditorState(editorState);
  };

  return (
    <div>
      <Header
        title="ADD MODULE"
        subtitle="Easiest way to setup your Pure Component"
      />
      <div className="mx-5 pb-5 pt-20">
        <div className="flex md:px-6 md:pt-6">
          <div
            className="flex flex-0 drawer-height absolute md:static p-6 md:p-0 bg-white dark:bg-gray-800 md:bg-transparent shadow md:shadow-none z-10 md:z-0
        transform  transition-transform duration-500 ease-in-out -translate-x-full md:transform-none"
          >
            <div className="sections w-80">
              <h3 className="px-1 text-sm font-medium border-b-2 border-transparent text-emerald-500 whitespace-nowrap focus:outline-none">
                Sections
              </h3>
              <div className="px-3 pr-4 overflow-y-scroll full-screen">
                <h4 className="mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300">
                  Click on a section below to edit the contents
                </h4>
                <ul className="mb-12 space-y-3">
                  {addModuleData.map(
                    (data: {
                      name: any;
                      readMorehref: any;
                      href: any;
                      date: any;
                      desc: any;
                      target: any;
                    }) => (
                      <div
                        role="button"
                        tabIndex={0}
                        id="target"
                        aria-roledescription="sortable"
                        aria-describedby="DndDescribedBy-0"
                        className="bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none"
                      >
                        {/* <button
                          type="button"
                          className="mr-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400"
                        >
                          <img
                            className="w-5 h-5"
                            src={twitter}
                            alt="Not found"
                          />
                        </button> */}
                        <span className="mt-3 mb-3">{data.name}</span>
                        <button
                          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-8"
                          type="button"
                          aria-label="Reset section"
                          onClick={() => {
                            showModal(true);
                            console.log('clicked');
                          }}
                        >
                          <img
                            className="w-auto h-5"
                            src={Reset}
                            alt="reset-icon"
                          />
                        </button>
                      </div>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-1 pt-6 px-6 md:p-0 flex-col md:flex-row" /> */}

          <div className="px-3 flex-1">
            <div className="h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-x-scroll md:overflow-x-auto overflow-y-scroll">
              <h1>Title</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </p>
              <h2>Usage</h2>
              <p>
                For more info visit:
                <a href="https://readme.so/editor" target="">
                  https://readme.so/editor
                </a>
              </p>
              <h2>Acknowledgements</h2>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Add Module"
        visible={addModal}
        onOk={() => showModal(false)}
        onCancel={() => showModal(false)}
        width={1000}
        bodyStyle={{ height: 400 }}
      >
        <div>
          <Editor
            editorState={edState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
            editorStyle={{ backgroundColor: 'lightgrey', height: 300 }}
          />
          {/* <textarea
            disabled
            value={draftToHtml(convertToRaw(edState.getCurrentContent()))}
          /> */}
        </div>
      </Modal>
    </div>
  );
};

export default AddModule;
