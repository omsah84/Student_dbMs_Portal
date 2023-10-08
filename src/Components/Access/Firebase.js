import React from 'react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDhQ1owOAsXJZeMjFA3cs4gpam3JSiaWbQ",
    authDomain: "student-db-management-sy-5397f.firebaseapp.com",
    projectId: "student-db-management-sy-5397f",
    storageBucket: "student-db-management-sy-5397f.appspot.com",
    messagingSenderId: "891060651330",
    appId: "1:891060651330:web:e7863a6adc6fb7c3d574db",
    measurementId: "G-WDE19E9PY5"
};


export const app = initializeApp(firebaseConfig);
