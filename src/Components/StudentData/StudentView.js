import React, { useState } from 'react'
import Style from './StudentView.module.scss';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhQ1owOAsXJZeMjFA3cs4gpam3JSiaWbQ",
  authDomain: "student-db-management-sy-5397f.firebaseapp.com",
  projectId: "student-db-management-sy-5397f",
  storageBucket: "student-db-management-sy-5397f.appspot.com",
  messagingSenderId: "891060651330",
  appId: "1:891060651330:web:e779840dfd4c4114d574db",
  measurementId: "G-ES455J743E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// const usersCollectionRef = collection(db, 'studentdata');

export default function StudentView(props) {

  // let [status, setStatus] = useState("");
  let [rollno, setRollNo] = useState(props.rollno);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phoneno, setPhoneNo] = useState('');
  let [branch, setBranch] = useState('');




  return (
    <div className={Style.studentView}>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Roll No:  <span style={{ fontSize: '10px' }}>{rollno}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Email:  <span style={{ fontSize: '10px' }}>{email}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Phone No:  <span style={{ fontSize: '10px' }}>{phoneno}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Branch:  <span style={{ fontSize: '10px' }}>{branch}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>
      <div className={Style.label}>
        <h2>Name:  <span style={{ fontSize: '10px' }}>{name}</span></h2>
      </div>

    </div>
  )
}
