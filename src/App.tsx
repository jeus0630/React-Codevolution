import React from 'react';
import './App.css';
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";

function App() {
    return (
        <div className="App">
            <Hero heroName={"batman"}></Hero>
            <Hero heroName={"joker"}></Hero>
        </div>
    );
}

export default App;
