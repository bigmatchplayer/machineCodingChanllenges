import React from "react";

const Profile = ({ formData, setFormData, handleChange }) => {
  console.log("form", formData);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <h1>Profile</h1>
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
        <div
          style={{
            display: "flex",
            gap: "10px",
            // justifyContent: "space-between",
          }}
        >
          <label>Name :</label>
          <input type="text" name="name" onChange={(e) => handleChange(e)} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label>Age :</label>
          <input type="number" name="age" onChange={(e) => handleChange(e)} />
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <label>Phone Number :</label>
          <input
            type="number"
            name="phoneNumber"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </section>
    </div>
  );
};

export default Profile;
