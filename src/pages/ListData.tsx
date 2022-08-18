import { Button, Modal } from 'antd';
import { initializeApp } from 'firebase/app';
import {
  getDocs,
  getFirestore,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from 'react-router-dom';
import { firebaseConfig } from '../assets/data/content';

const ListData = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const [displayData, setDisplayData] = useState<any | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(0);
  const [editIndex, setEditIndex] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [firestoreData, setFirestoreData] = useState<CategoriesType[]>([]);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const customStyles = {
    rows: {
      style: {
        minHeight: '60px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '30px', // override the cell padding for head cells
        paddingRight: '30px',
      },
    },
    cells: {
      style: {
        paddingLeft: '30px', // override the cell padding for data cells
        paddingRight: '30px',
      },
    },
  };

  const columns = [
    {
      name: 'Title',
      selector: (row: { mainTitle: any }) => row.mainTitle,
    },
    {
      name: 'Action',
      cell: (item: any) => (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const edIndex = firestoreData
              .map((e) => e.mainTitle)
              .indexOf(item.mainTitle);
            setEditIndex(edIndex);
            console.log('editIndex', editIndex);
            history.push({
              pathname: '/add-module',
              state: firestoreData[edIndex].dataset,
              search: item.mainTitle,
            });
          }}
        >
          Edit
        </button>
      ),
    },
    {
      name: 'Action',
      cell: (item: any) => (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const delIndex = firestoreData
              .map((e) => e.mainTitle)
              .indexOf(item.mainTitle);
            setDeleteIndex(delIndex);
            showModal();
          }}
        >
          Delete
        </button>
      ),
    },
  ];
  type CategoriesType = {
    mainTitle: string;
    dataset: CoursesType[];
  };
  type CoursesType = {
    id: number;
    dp: number;
    type: string;
    desc: string;
  };

  const callFirestore = async () => {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const mySnapshot = await getDocs(collection(firestore, 'dailySpecial'));
    mySnapshot.forEach((document) => {
      const obj = {
        mainTitle: '',
        dataset: [
          {
            id: 0,
            dp: 0,
            type: '',
            desc: '',
          },
        ],
      };
      obj.mainTitle = document.data().mainTitle;
      obj.dataset = document.data().dataset;
      if (!document.data().isDeleted) {
        firestoreData.push(obj);
      }
    });
    console.log(' => ', hasLoaded, displayData);
    setDisplayData(firestoreData[0].dataset);
    setHasLoaded(true);
  };

  useEffect(() => {
    callFirestore();
  }, [firestoreData]);

  return (
    <div>
      <Button type="primary" onClick={() => history.push('/add-module')}>
        Add Module
      </Button>
      <DataTable
        title="Pure Components List"
        highlightOnHover
        pointerOnHover
        columns={columns}
        data={firestoreData}
        customStyles={customStyles}
        fixedHeader
        // actions={
        //   <Button type="primary" onClick={() => history.push('/add-module')}>
        //     Add Module
        //   </Button>
        // }
      />
      <Modal
        title="Delete"
        visible={isModalVisible}
        onOk={async () => {
          const app = initializeApp(firebaseConfig);
          const firestore = getFirestore(app);
          console.log('firestore', firestore);
          const washingtonRef = doc(
            firestore,
            'dailySpecial',
            `${firestoreData[deleteIndex].mainTitle}`,
          );

          // Set the "isDeleted" field of the city 'DC'
          await updateDoc(washingtonRef, {
            isDeleted: true,
          });
          // setDoc(washingtonRef, { isDeleted: true }, { merge: true });
          setFirestoreData([]);
          setIsModalVisible(false);
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Do you want to delete the selected item?</p>
      </Modal>
    </div>
  );
};

export default ListData;
