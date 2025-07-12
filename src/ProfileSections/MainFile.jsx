import React, { useState } from "react";
import Profile from "./Sections/Profile";
import RandomDetails from "./Sections/RandomDetails";
import Setting from "./Sections/Setting";

const MainFile = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    interest: [],
    setting: "",
  });
  const handleChange = (e) => {
    let { value, name, checked } = e.target;
    console.log("value", value);
    console.log("name", name);
    console.log("checked", checked);
    if (name == "interest") {
      console.log("hello");
      setFormData((prev) => ({
        ...prev,
        interest: prev.interest.includes(value)
          ? prev.interest.filter((ele) => ele !== value)
          : [...prev.interest, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        // interest: [...prev.interest, value],
      }));
    }

    // if ((name = "name")) {
    //   setFormData({ ...formData, name: value });
    // }
  };
  console.log("formData", formData);
  const Phases = [
    {
      id: 1,
      name: "Profile",
      element: (
        <Profile
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      ),
    },
    {
      id: 2,
      name: "RandomDetails",
      element: (
        <RandomDetails
          formData={formData}
          setFormData={setFormData}
          handleChange={handleChange}
        />
      ),
    },
    {
      id: 3,

      name: "Setting",
      element: <Setting formData={formData} setFormData={setFormData} />,
    },
  ];

  const [phasesArray, setPhasesArray] = useState(Phases);

  const [currentPhase, setPhase] = useState(1);

  const handlePrev = () => {
    setPhase((prev) => prev - 1);
  };
  const handleNext = () => {
    setPhase((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log("formData", formData);
  };

  return (
    <>
      <div
        style={{ border: "2px solid black", height: "500px", width: "500px" }}
      >
        {phasesArray.map((phase, index) => {
          return (
            <div style={{ padding: "3px " }}>
              {phase.id === currentPhase && (
                <div
                  style={{
                    border: "2px solid black",
                    padding: "10px",
                    height: "400px",
                    width: "full",
                  }}
                >
                  <p
                    style={{
                      border: "2px solid black",
                      padding: "2px",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {phase.element}
                  </p>
                </div>
              )}
            </div>
          );
        })}
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            gap: "3px",
          }}
        >
          {currentPhase > 1 && <button onClick={handlePrev}>Prev</button>}
          {currentPhase < phasesArray.length && (
            <button onClick={handleNext}>Next</button>
          )}
          {currentPhase === phasesArray.length && (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </>
  );
};

export default MainFile;
