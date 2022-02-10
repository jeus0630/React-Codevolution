import React from 'react';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
    return (
        <div className="App">
            <UserGreeting></UserGreeting>
        </div>
    );
}

export default App;
