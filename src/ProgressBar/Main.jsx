import React, { useState } from "react";

const Progress = ({ progress }) => {
  return (
    <>
      <div
        style={{
          height: "20px",
          width: "70%",
          border: "1px solid blue",
          marginX: "auto",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progress}%`,
            background: "green",
            overflow: "hidden",
            textAlign: "center",
            transition: " 0.3s ease-in-out", // this is the key
          }}
        >
          {progress}%
        </div>
      </div>
    </>
  );
};

const Main = () => {
  const [progress, setProgress] = useState(0);

  const handleLeft = () => {
    if (progress > 0) {
      setProgress((prev) => prev - 5);
    }
  };

  const handleRight = () => {
    if (progress <= 95) {
      setProgress((prev) => prev + 5);
    }
  };

  return (
    <div>
      <h1
        style={{
          margin: "auto",
          width: "full",
          border: "2px solid grey",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        Progress Bar
      </h1>
      <section
        style={{
          height: "80vh",
          width: "full",
          border: "1px solid grey",
          margin: "20px",
          padding: "20px",
        }}
      >
        <Progress progress={progress} />
        <div style={{ margin: "20px" }}>
          <button onClick={handleLeft}>Left</button>
          <button onClick={handleRight}>right</button>
        </div>
      </section>
    </div>
  );
};

export default Main;
