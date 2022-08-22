import { Button, Input } from 'antd';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { firebaseConfig } from '../assets/data/content';

const Authentication = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');
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
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push('/list-data');
      } else {
        // User is signed out
      }
    });
  }, []);
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <h5>Email address</h5>
            <Input
              placeholder="Enter email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <h5>Password</h5>
            <Input.Password
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log('pass', pass);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button
              onClick={() => {
                console.log('clicked');
                logInWithEmailAndPassword(email, pass);
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Authentication;
