import React, { useEffect, useState } from "react";
import Chart from "./components/Chart";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      fetch("/api/hello")
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
    } catch (error) {
      console.error("Error:", error);
    }
  }, []);

  return (
    <div>
      <h1>React + Vite + TypeScript</h1>
      <p>Backend Message: {message}</p>
      <Chart />
    </div>
  );
};

export default App;
