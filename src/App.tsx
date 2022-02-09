import React from 'react';
import './App.css';
import Greet from "./components/Greet";
import Hello from "./components/Hello";

function App() {
    return (
        <div className="App">
            <Greet name={"Bruce"} heroName={"Batman"}></Greet>
            <Greet name={"Clark"} heroName={"Superman"}></Greet>
            <Greet name={"Diana"} heroName={"Wonder woman"}></Greet>
            <Hello></Hello>
        </div>
    );
}

export default App;
