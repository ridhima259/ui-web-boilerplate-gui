import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { firebaseConfig } from '../assets/data/content';
import { NotesState } from '../services/reducer';

const Authentication = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
  const notes = useSelector<NotesState>((state) => state.notes);
  console.log('notes', notes);

  const logInWithEmailAndPassword = async (mail: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, mail, password);
      history.push('/list-data');
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  useEffect(() => {
    console.log('useffect called');
  }, []);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <h5>Email address</h5>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
                console.log('email', email);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <h5>Password</h5>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log('pass', pass);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                console.log('clicked');
                logInWithEmailAndPassword(email, pass);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
