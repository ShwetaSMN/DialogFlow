import React, {useState, useEffect} from "react";
import axios from "axios";
import "./app.css";

export default function App(){

const [message, updateMessage] = useState('Loading!!!');

useEffect(()=>{
    axios.get('http://localhost:3001').then((res)=>{
        updateMessage(res.data);
    }).catch(err=>{
        updateMessage('Failed');
    });
}, []);

    return <div>
        <h1>Hello </h1>
        <div>{message}</div>
    </div>;
}