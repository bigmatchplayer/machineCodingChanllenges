import React from "react";

const BoxDesign = ({ filled, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        style={{
          width: "100px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: `${filled ? "green" : "white"}`,
        }}
      ></div>
    </div>
  );
};

export default BoxDesign;
