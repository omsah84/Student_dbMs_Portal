import React, { useState } from 'react'
import Style from './StudentUpdate.module.scss'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";


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


export default function StudentUpdata(props) {
  let [status, setStatus] = useState("");
  let [rollno, setRollNo] = useState(props.rollno);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phoneno, setPhoneNo] = useState('');
  let [branch, setBranch] = useState('');

  const onSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "studentdata"), {
        rollno:rollno,
        name:name,
        email:email,
        phoneno:phoneno,
        branch:branch

      });
      console.log("Document written with ID: ", docRef.id);
      setStatus("Successfully Submitted..");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className={Style.studentUpdate}>
      <div className={Style.label}>
        <h2>Name:  <div style={
          { fontSize: '10px' }
        }><input type='text' className={
          Style.inputStyle
        } onChange={(e) => setName(e.target.value)} value={name} /></div></h2>
      </div>


      <div className={Style.label}>
        <h2>Roll No:  <div style={
          { fontSize: '10px' }
        }><input type='text' placeholder={rollno} className={Style.inputStyle} /></div></h2>


      </div>
      <div className={Style.label}>
        <h2>Email:  <div style={
          { fontSize: '10px' }
        }><input type='text' className=
          {Style.inputStyle
          } onChange={(e) => setEmail(e.target.value)} value={email} /></div></h2>


      </div>
      <div className={Style.label}>
        <h2>Phone No:  <span style={
          { fontSize: '10px' }
        }><input type='text' className={
          Style.inputStyle
        } onChange={(e) => setPhoneNo(e.target.value)} value={phoneno} /></span></h2>
      </div>


      <div className={Style.label}>
        <h2>Branch:  <div style={
          { fontSize: '10px' }
        }><input type='text' className={
          Style.inputStyle
        } onChange={(e) => setBranch(e.target.value)} value={branch} /></div></h2>
      </div>


      <div><br />
        <button className={Style.btn} onClick={onSubmit}>Submit</button>
        <br />
        <h5>{status}</h5>
      </div>
    </div>
  )
}
