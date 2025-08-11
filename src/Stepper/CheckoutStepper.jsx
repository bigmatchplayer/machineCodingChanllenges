import React, { useState } from "react";
import "./stipper.css";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentIndex] = useState(0);
  const [isCompelete, setIsComplete] = useState(false);
  if (!stepsConfig.length) {
    return <></>;
  }
  const handleChange = (index) => {};

  return (
    <>
      <div className="stepper">
        {stepsConfig.map((step, index) => {
          return (
            <div key={index} className="step">
              <h2 className="step-number">{index + 1}</h2>
              <h3 className="step-name">{step.name}</h3>
            </div>
          );
        })}
      </div>
      <button onClick={() => handleChange(index)}>Next</button>
    </>
  );
};

export default CheckoutStepper;
