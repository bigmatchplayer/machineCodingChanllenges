import React, { useState } from "react";
import "./style.css";
import BoxDesign from "./BoxDesign";

const GridBox = () => {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  const [isSelectedBoxes, setIsSelectedBoxes] = useState([]);

  //After flat
  //   [1,1,1,1,0,1,1,1,1]
  const deActivateCells = () => {
    console.log("I am here...");

    const interval = setInterval(() => {
      setIsSelectedBoxes((prev) => {
        if (prev.length == 0) {
          clearInterval(interval);
          return [];
        }

        const newArray = [...prev];
        newArray.pop();
        return newArray;
      });
    }, [1000]);
  };

  const activeCells = (index) => {
    if (isSelectedBoxes.includes(index)) {
      return;
    }

    const newOrder = [...isSelectedBoxes, index]; // ✅ moved up
    console.log("newOrder", newOrder);

    setIsSelectedBoxes(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deActivateCells();
    }
  };

  return (
    <div
      style={{
        margin: "auto",
        height: "500px",
        width: "450px",
        border: "2px solid black",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {config.flat().map((ele, index) => {
        return (
          <>
            {ele == 1 ? (
              <BoxDesign
                key={index}
                filled={isSelectedBoxes.includes(index)}
                onClick={() => activeCells(index)}
              />
            ) : (
              <span></span>
            )}
          </>
        );
      })}
    </div>
  );
};

export default GridBox;
