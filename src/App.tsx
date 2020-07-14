import React from "react";
import "./App.css";
import { Timeline } from "./components/TimeLine";

function App() {
  return (
    <div className="App">
      <div style={{ height: "200px", backgroundColor: "yellow" }}></div>

      <div>
        <Timeline />
      </div>

      <div style={{ height: "250px", backgroundColor: "yellow" }}></div>
      
    </div>
  );
}

export default App;
