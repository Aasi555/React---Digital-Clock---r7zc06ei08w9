import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  setInterval(Update, 1000);
  const date = new Date();
  const time = date.toLocaleString();
  const [now, setNow] = useState(time);

  function Update() {
    setNow(time);
  }

  return (
    <div id="main">
      <div className="date-time">
        <h1>{now}</h1>
      </div>
    </div>
  );
};

export default App;
