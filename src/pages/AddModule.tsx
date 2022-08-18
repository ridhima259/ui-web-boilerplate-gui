import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Gist from 'react-gist';
import { Modal, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
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
import Edit from '../assets/svg/edit.svg';
import Trash from '../assets/svg/trash.svg';
import { firebaseConfig, selectModuleData } from '../assets/data/content';

const AddModule = () => {
  type editType = {
    detail: [
      {
        id: number;
        dp: number;
        type: string;
        desc: string;
      },
    ];
    heading: string;
  };

  const history = useHistory();
  const location = useLocation().state as editType;
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);

  const [addModal, showModal] = useState(false);
  const [enableButton, setEnableButton] = useState(0);
  // prettier-ignore
  const [edState, setEditorState] = React.useState(() => EditorState.createEmpty());
  const [name, setName] = useState('');
  const [mainHeading, setMainHeading] = useState('');
  const [isMainHeadingAvail, setIsMainHeadingAvail] = useState(false);
  const [val, setVal] = useState(0);
  const [id, setID] = useState(0);
  const [dp, setDp] = useState(-1);
  const [type, setType] = useState('');
  const [gistData, setGistData] = useState('');
  const [hasLoaded, setHasLoaded] = useState(false);
  const [addModuleData, setaddModuleData] = React.useState([
    {
      type: 'Heading',
      id: 1,
      dp: 1,
      desc: '',
    },
    {
      type: 'Description',
      id: 2,
      dp: 2,
      desc: '',
    },
  ]);

  useEffect(() => {
    console.log('location', location, hasLoaded);
    // prettier-ignore
    if (location) {
      addModuleData.length = 0; // empties array
      location.detail.map((data) => {
        addModuleData.push(data);
        return false;
      });
      setHasLoaded(true);
      setMainHeading(location.heading);
    }
  }, [location]);

  const dragItem = React.useRef<any>(null);

  const dragOverItem = React.useRef<any>(null);

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>,
  ) => {
    setEditorState(editorState);
  };

  const resetButtonClicked = (data: {
    type: any;
    id: any;
    dp: React.SetStateAction<number>;
  }) => {
    setID(data.id);
    setDp(data.dp);
    setName('');
    setType(data.type);
    const obj = addModuleData.find((o) => o.dp === data.dp);
    console.log('obj', obj);
    if (type === 'Heading' || type === 'Description' || type === 'Usage') {
      if (obj) {
        setName(obj.desc);
      }
    }
    if (data.type === 'Api Reference') {
      if (obj) {
        const html = obj.desc;
        const blocksFromHTML = convertFromHTML(html);
        const block = ContentState.createFromBlockArray(
          blocksFromHTML.contentBlocks,
          blocksFromHTML.entityMap,
        );
        setEditorState(EditorState.createWithContent(block));
        setName(obj.type);
      }
    }
    showModal(true);
  };

  const deleteButtonClicked = (
    data: {
      type: any;
      id?: React.SetStateAction<number>;
      dp?: React.SetStateAction<number>;
    },
    index: any,
  ) => {
    const deleteIndex = addModuleData.findIndex(
      (item: any) => item.dp === data.dp,
    );
    console.log('deleteIndex', deleteIndex);
    setVal(val - 1);
    addModuleData.splice(index, 1);
  };

  const onCancelModal = () => {
    setID(0);
    setDp(-1);
    showModal(false);
    setEditorState(EditorState.createEmpty());
  };

  const onOkModal = () => {
    const obj = addModuleData.find((o) => o.dp === dp);
    if (obj) {
      addModuleData.map((item) => {
        if (item.dp === dp) {
          if (type === 'Api Reference') {
            // eslint-disable-next-line no-param-reassign
            item.type = 'Api Reference';
            // eslint-disable-next-line no-param-reassign
            item.desc = draftToHtml(convertToRaw(edState.getCurrentContent()));
          } else {
            // eslint-disable-next-line no-param-reassign
            item.type = type;
            // eslint-disable-next-line no-param-reassign
            item.desc = name;
          }
        }

        return item;
      });
    } else {
      console.log('else');
      if (type === 'Api Reference') {
        const updatedData = [
          ...addModuleData,
          {
            id,
            dp,
            type: 'Api Reference',
            desc: draftToHtml(convertToRaw(edState.getCurrentContent())),
          },
        ];
        setaddModuleData(updatedData);
      } else {
        const updatedData = [
          ...addModuleData,
          {
            id,
            dp,
            type,
            desc: name,
          },
        ];
        setaddModuleData(updatedData);
      }
    }

    const jsondata = {
      mainTitle: mainHeading,
      dataset: addModuleData,
    };

    localStorage.setItem('my_json', JSON.stringify(jsondata));
    showModal(false);
    setEditorState(EditorState.createEmpty());
    setName('');
    setID(0);
    console.log('jsondata', localStorage.getItem('my_json'));
  };

  const dragStart = (e: React.DragEvent<HTMLButtonElement>, position: any) => {
    dragItem.current = position;
    console.log(position, e);
  };

  const dragEnter = (
    e: React.DragEvent<HTMLButtonElement>,
    position: number,
  ) => {
    dragOverItem.current = position;
    console.log(e.target, position);
  };

  const drop = () => {
    const copyListItems = [...addModuleData];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    console.log('copyListItems', copyListItems);

    copyListItems.map((c, index) => {
      const slide = c;
      slide.dp = index + 1;
      return slide;
    });

    setaddModuleData(copyListItems);
  };

  return (
    <div>
      <Header
        title="ADD MODULE"
        subtitle="Easiest way to setup your Pure Component"
        showTitle
        value={mainHeading}
        onTitleChanged={(title: string) => {
          setMainHeading(title);
        }}
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
                      data: {
                        type: any;
                        id: React.SetStateAction<number>;
                        dp: React.SetStateAction<number>;
                      },
                      index: any,
                    ) => (
                      <button
                        onDragStart={(e) => dragStart(e, index)}
                        onDragEnter={(e) => dragEnter(e, index)}
                        onDragEnd={drop}
                        draggable
                        type="button"
                        aria-label="add section"
                        onClick={() => setEnableButton(index)}
                        className="w-full bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none"
                      >
                        <span className="mt-3 mb-3">{data.type}</span>
                        {enableButton === index && (
                          <button
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 absolute right-8"
                            type="button"
                            aria-label="Reset section"
                            onClick={() => {
                              resetButtonClicked(data);
                            }}
                          >
                            <img
                              className="w-auto h-5"
                              src={Edit}
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
                              deleteButtonClicked(data, index);
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
                  {selectModuleData.map(
                    (data: { type: any; id: any }, index: any) => (
                      <button
                        className="w-full bg-white dark:bg-gray-200 shadow rounded-md pl-1 pr-14 py-2 flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 relative select-none"
                        type="button"
                        aria-label="Select section"
                        onClick={() => {
                          setEnableButton(-1);
                          setVal(val + 1);
                          const obj = {
                            id,
                            type,
                            dp,
                            desc: '',
                          };
                          const len = addModuleData.length;
                          obj.id = selectModuleData[index].id;
                          obj.type = selectModuleData[index].type;
                          // prettier-ignore
                          obj.dp = len === 0 ? 1 : addModuleData[len - 1].dp + 1;

                          addModuleData.push(obj);
                          console.log('addModuleData', addModuleData);
                        }}
                      >
                        <span className="mt-3 mb-3">{data.type}</span>
                      </button>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          <div className="px-3 flex-1">
            <div className="py-3 flex-row">
              <nav className=" -mb-px flex space-x-8">
                <Button
                  type="primary"
                  onClick={async () => {
                    // prettier-ignore
                    if (
                      mainHeading.length > 0
                      && addModuleData[0]?.desc.length > 0
                    ) {
                      // setIsMainHeadingAvail(true);
                      const specialoftheDay = doc(
                        firestore,
                        `dailySpecial/${mainHeading}`,
                      );
                      const jsondata = {
                        mainTitle: mainHeading,
                        dataset: addModuleData,
                      };
                      try {
                        // await setDoc(specialoftheDay, jsondata);
                        await setDoc(specialoftheDay, jsondata, {
                          merge: true,
                        });
                        history.push('/viewpage');
                      } catch (error) {
                        console.log('error occured!');
                      }
                    } else {
                      setIsMainHeadingAvail(true);
                    }
                    console.log('deploy clicked');
                  }}
                >
                  Deploy
                </Button>
              </nav>
              {isMainHeadingAvail && (
                <small className="w-100 required-field">
                  Please enter main heading and alteast fill one section
                </small>
              )}
            </div>
            <div className="h-full preview-width md:w-auto border border-gray-500 rounded-md p-6 preview bg-white full-screen overflow-x-scroll md:overflow-x-auto overflow-y-scroll">
              {addModuleData.map((data) => (
                <div>
                  {data.id === 1 && data.desc.length > 0 && (
                    <h1>{data.desc}</h1>
                  )}
                  {data.id === 2 && data.desc.length > 0 && <p>{data.desc}</p>}
                  {data.id === 3 && data.desc.length > 0 && (
                    <div>
                      <h1>Usage</h1>
                      <Gist id={gistData} />
                    </div>
                  )}
                  {data.id === 4 && data.desc.length > 0 && (
                    <div>
                      <h1>Api Reference</h1>
                      <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {type === 'Api Reference' && (
        <Modal
          title="Add Module"
          visible={addModal}
          onOk={() => {
            onOkModal();
          }}
          onCancel={() => onCancelModal()}
          width={1000}
          bodyStyle={{ height: 400 }}
        >
          <div>
            <Editor
              editorState={edState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={onEditorStateChange}
              editorStyle={{ height: 200 }}
              toolbar={{
                options: [
                  'inline',
                  'blockType',
                  'fontSize',
                  'fontFamily',
                  'list',
                  'textAlign',
                  'link',
                ],
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
              }}
            />
          </div>
        </Modal>
      )}
      {type === 'Heading' && (
        <Modal
          title="Add Heading"
          visible={addModal}
          onOk={() => {
            onOkModal();
          }}
          onCancel={() => onCancelModal()}
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
        </Modal>
      )}

      {type === 'Description' && (
        <Modal
          title="Add Description"
          visible={addModal}
          onOk={() => {
            onOkModal();
          }}
          onCancel={() => onCancelModal()}
          bodyStyle={{ height: 200 }}
        >
          <div className="employee_details_box">
            <div className="header_items">
              <span>Description</span>
            </div>
            <textarea
              style={{
                display: 'block',
                overflow: 'hidden',
                resize: 'none',
                width: '100%',
                height: '150px',
                outline: 'auto',
                padding: '5px',
              }}
              rows={5}
              cols={30}
              placeholder="Add Description"
              id="myTextarea"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </Modal>
      )}

      {type === 'Usage' && (
        <Modal
          title="Add Usage"
          visible={addModal}
          onOk={() => {
            setGistData(name);
            onOkModal();
          }}
          onCancel={() => onCancelModal()}
        >
          <div className="employee_details_box">
            <div className="header_items">
              <span>Add GitGist id</span>
            </div>
            <div className="input_area">
              <Input
                style={{ height: 30 }}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <small className="w-100 text-warning">
                Help Text : https://gist.github.com/yourname/
              </small>
              <small className="w-100 required-field">id</small>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default AddModule;
