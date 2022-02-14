import React from 'react';
import './App.css';
import {useState} from "react";
import CounterEx from "./components/CounterEx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <CounterEx count={count} setCount={setCount}></CounterEx>
        </div>
    );
}

export default App;
