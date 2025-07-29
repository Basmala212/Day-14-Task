import React from "react";
import "./App.css";
import Parent from "./components/Parent/Parent.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
function App() {
  return (
    <div className="App">
            <Navbar />
      <h1>React App</h1>
      <Parent />
    </div>
  );
}

export default App;
