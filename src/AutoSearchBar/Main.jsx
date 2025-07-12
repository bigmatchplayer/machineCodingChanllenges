import React, { useEffect, useState } from "react";

const array = [
  "mango",
  "double mango",
  "triple mango",
  "red apple",
  "green apple",
  "yellow apple",
  "leon maker",
  "manote karlo",
  "mixed moon",
  "jomoato naam",
  "hoker joker",
];

const Main = () => {
  const [search, setSearch] = useState("m");
  const [showOptions, setshowOpens] = useState(false);

  const handleChange = (e) => {
    setSearch((prev) => (prev = e.target.value));
  };
  const [renderList, setRenderList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newArray = array.filter((ele) => ele.includes(search));
      setRenderList(newArray);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return (
    <>
      <div style={{ width: "500px", margin: "auto" }}>
        <h1>Search Your query:-</h1>

        <input
          style={{ padding: "10px", width: "500px", fontSize: "20px" }}
          onChange={(e) => handleChange(e)}
          onFocus={() => setshowOpens(true)}
          onBlur={() => setshowOpens(false)}
        ></input>
        {showOptions && (
          <div style={{ border: "2px solid black", width: "520px" }}>
            {renderList.map((ele) => (
              <p key={ele}>{ele}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
