import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import 'antd/dist/antd.css';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromHTML,
} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../components/header';
import Reset from '../assets/svg/reset.svg';
import Trash from '../assets/svg/trash.svg';
import { addModuleData, selectModuleData } from '../assets/data/content';

const AddModule = () => {
  const [addModal, showModal] = useState(false);
  const [enableButton, setEnableButton] = useState(0);
  // prettier-ignore
  const [edState, setEditorState] = React.useState(() => EditorState.createEmpty());
  const [content, setContent] = React.useState([
    {
      id: 0,
      title: '',
      desc: '',
    },
  ]);
  const [name, setName] = useState('');
  const [val, setVal] = useState(0);
  const [id, setID] = useState(0);

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
                    (
                      data: { name: any; id: React.SetStateAction<number> },
                      index: any,
                    ) => (
                      <button
                        type="button"
                        aria-label="add section"
                        onClick={() => setEnableButton(index)}
                        className="w-full bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none"
                      >
                        <span className="mt-3 mb-3">{data.name}</span>
                        {enableButton === index && (
                          <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-8"
                            type="button"
                            aria-label="Reset section"
                            onClick={() => {
                              setID(data.id);
                              setName(data.name);
                              const obj = content.find((o) => o.id === data.id);
                              console.log('obj', obj);
                              if (obj) {
                                const html = obj.desc;
                                const blocksFromHTML = convertFromHTML(html);
                                const block = ContentState.createFromBlockArray(
                                  blocksFromHTML.contentBlocks,
                                  blocksFromHTML.entityMap,
                                );
                                setEditorState(
                                  EditorState.createWithContent(block),
                                );
                                setName(obj.title);
                              }
                              showModal(true);
                            }}
                          >
                            <img
                              className="w-auto h-5"
                              src={Reset}
                              alt="reset-icon"
                            />
                          </button>
                        )}
                        {enableButton === index && (
                          <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-2"
                            type="button"
                            aria-label="Delete section"
                            onClick={() => {
                              const deleteIndex = content.findIndex(
                                (item: any) => item.title === data.name,
                              );
                              content.splice(deleteIndex, 1);
                              setVal(val - 1);
                              selectModuleData.push(
                                addModuleData.splice(index, 1)[0],
                              );
                            }}
                          >
                            <img
                              className="w-auto h-5"
                              src={Trash}
                              alt="trash-icon"
                            />
                          </button>
                        )}
                      </button>
                    ),
                  )}
                </ul>
              </div>

              <div className="px-3 pr-4 overflow-y-scroll full-screen">
                <h4 className="mb-3 text-xs leading-6 text-gray-900 dark:text-gray-300">
                  Click on a section below to add it to your preview
                </h4>
                <ul className="mb-12 space-y-3">
                  {selectModuleData.map((data: { name: any }, index: any) => (
                    <button
                      className="w-full bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none"
                      type="button"
                      aria-label="Select section"
                      onClick={() => {
                        setEnableButton(-1);
                        setVal(val + 1);
                        addModuleData.push(
                          selectModuleData.splice(index, 1)[0],
                        );
                      }}
                    >
                      <span className="mt-3 mb-3">{data.name}</span>
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="px-3 flex-1">
            <div className="h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-x-scroll md:overflow-x-auto overflow-y-scroll">
              {/* <h1>Title</h1>
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
              <h2>Acknowledgements</h2> */}
              {content.map((data) => (
                <div>
                  <h1>{data.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        title="Add Module"
        visible={addModal}
        onOk={() => {
          const obj = content.find((o) => o.id === id);
          if (obj) {
            content.map((item) => {
              if (item.id === id) {
                // eslint-disable-next-line no-param-reassign
                item.title = name;
                // eslint-disable-next-line no-param-reassign
                item.desc = draftToHtml(
                  convertToRaw(edState.getCurrentContent()),
                );
              }

              return item;
            });
          } else {
            const updatedData = [
              ...content,
              {
                id,
                title: name,
                desc: draftToHtml(convertToRaw(edState.getCurrentContent())),
              },
            ];
            setContent(updatedData);
          }

          localStorage.setItem('my_json', JSON.stringify(content));
          showModal(false);
          setEditorState(EditorState.createEmpty());
          setName('');
          setID(0);
          console.log('jsondata', localStorage.getItem('my_json'));
        }}
        onCancel={() => {
          setID(0);
          showModal(false);
        }}
        width={1000}
        bodyStyle={{ height: 400 }}
      >
        <div className="employee_details_box">
          <div className="header_items">
            <span>Title</span>
          </div>
          <div className="input_area">
            <Input
              style={{ height: 30 }}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <Editor
            editorState={edState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={onEditorStateChange}
            editorStyle={{ height: 200 }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddModule;
