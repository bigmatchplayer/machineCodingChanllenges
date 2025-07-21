import React, { useState } from "react";

const OtpDigitCount = 5;
const Main = () => {
  const [otpInput, setOTPInput] = useState(new Array(OtpDigitCount).fill(""));

  const handleInputChange = (e, index) => {
    const { value } = e.target;

    // Allow only single digit numbers
    if (!/^[0-9]?$/.test(value)) {
      console.log("Not a valid digit");
      return;
    }

    const newArray = [...otpInput];
    newArray[index] = value.slice(-1);
    setOTPInput(newArray);
  };

  console.log("array", otpInput);

  return (
    <div
      style={{
        height: "full",
        width: "full",
        margin: "auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}> Enter Your OTP:</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {otpInput.map((ele, index, array) => {
          return (
            <input
              key={index}
              style={{
                border: "1px solid black",
                height: "50px",
                width: "50px",
                fontSize: "40px",
                padding: "3px",
                textAlign: "center",
              }}
              onChange={(e) => handleInputChange(e, index)}
            ></input>
          );
        })}
      </div>
    </div>
  );
};

export default Main;

// import React, { useRef, useState } from "react";

// const OtpDigitCount = 4;

// const Main = () => {
//   const [otpInput, setOTPInput] = useState(new Array(OtpDigitCount).fill(""));
//   const inputRefs = useRef([]);

//   const handleInputChange = (e, index) => {
//     const { value } = e.target;

//     if (!/^[0-9]?$/.test(value)) return;

//     const newArray = [...otpInput];
//     newArray[index] = value.slice(-1);
//     setOTPInput(newArray);

//     // Auto-focus to next input
//     if (value && index < OtpDigitCount - 1) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace") {
//       if (otpInput[index] === "" && index > 0) {
//         inputRefs.current[index - 1]?.focus();
//       }
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", paddingTop: "50px" }}>
//       <h1>Enter Your OTP:</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "20px",
//         }}
//       >
//         {otpInput.map((digit, index) => (
//           <input
//             key={index}
//             value={digit}
//             ref={(el) => (inputRefs.current[index] = el)}
//             onChange={(e) => handleInputChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             maxLength={1}
//             style={{
//               border: "1px solid black",
//               height: "50px",
//               width: "50px",
//               fontSize: "40px",
//               padding: "3px",
//               textAlign: "center",
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;
