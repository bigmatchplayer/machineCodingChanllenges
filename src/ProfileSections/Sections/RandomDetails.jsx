import React from "react";

const RandomDetails = ({ handleChange }) => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Interest</h1>
      <section
        style={{
          width: "80%",

          border: "1px solid gray",
          padding: "1rem",
          margin: "2rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <label htmlFor=""> List Your Interest</label>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.3rem" }}
        >
          <input
            type="checkbox"
            name="interest"
            onChange={handleChange}
            value={"Cricket"}
          />{" "}
          Cricket
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.3rem" }}
        >
          <input
            type="checkbox"
            name="interest"
            onChange={handleChange}
            value={"football"}
            checked={true}
          />{" "}
          football
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "0.3rem" }}
        >
          <input
            type="checkbox"
            name="interest"
            onchange={handleChange}
            value="Volleyball"
          />{" "}
          VolleyBall
        </div>
      </section>
    </div>
  );
};

export default RandomDetails;
