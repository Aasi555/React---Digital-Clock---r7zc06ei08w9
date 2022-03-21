import React, { useState } from "react";
import "../styles/App.css";

function App() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime);
  }

  return (
    <div className="date-time">
      <h1>{time}</h1>
     
    </div>
  );
}

export default App;
