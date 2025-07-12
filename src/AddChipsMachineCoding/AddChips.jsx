import React, { useState } from "react";

const AddChips = () => {
  const [search, setSearch] = useState("");

  const [chips, setChips] = useState([]);

  const handleChange = (e) => {
    setSearch((prev) => (prev = e.target.value));
  };

  const handleKeyDown = (e) => {
    const value = e.target.value;

    if (e.key == "Enter") {
      setSearch((prev) => (prev = e.target.value));

      setChips((prev) => [search, ...prev]);
      setSearch("");
    }
  };
  const handleRemove = (e) => {
    console.log(e);

    const newArray = chips.filter((item, index) => index !== e);
    console.log("filteredaArrya", newArray);
    setChips(newArray);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "full",
          height: "full",
        }}
      >
        <p>Enter your Search :</p>
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        />
      </div>
      {chips.map((ele, index, array) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: "gray",
              padding: "2rem",
              margin: "2rem",
              borderRadius: "2rem",
            }}
          >
            {ele}
            <span
              style={{
                backgroundColor: "Black",
                color: "red",
                padding: "0.2rem",
                borderRadius: "100%",
                height: "15px",
                width: "15px",
                cursor: "pointer",
              }}
              onClick={(e) => {
                handleRemove(index);
              }}
            >
              x
            </span>
          </div>
        );
      })}
    </>
  );
};

export default AddChips;
