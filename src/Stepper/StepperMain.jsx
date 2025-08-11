import React from "react";
import CheckoutStepper from "./CheckoutStepper";

const checkoutSteps = [
  {
    name: "Customer Info",
    Component: () => <div> Provide Your Contact details</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div> Enter your shipping address</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order</div>,
  },
  {
    name: "Delivered",
    Component: () => <div> Your ordered has been delivered</div>,
  },
];

const StepperMain = () => {
  return (
    <div>
      <h2>Checkout </h2>
      <CheckoutStepper stepsConfig={checkoutSteps} />
    </div>
  );
};

export default StepperMain;
