import React from "react";
import oculus1 from "../assets/oculus1.jpg";
import "../styles/style.css";

const FirstComp = () => {
  return (
    <div className="container">
      <h1 style={{ zIndex: "2" }} className="title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        consequuntur velit in ad quam unde quaerat, nam et omnis fugit rem vel
        adipisci, soluta, sint ut nesciunt maxime quasi reiciendis.
      </h1>
      {/* <p style={{ zIndex: "1" }}>
        {" "}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ullam non
        omnis! Numquam assumenda voluptates reprehenderit explicabo adipisci?
        Minus necessitatibus tempore enim nisi magnam quos ullam atque?
        Voluptatibus, nesciunt possimus!{" "}
      </p> */}
      <img style={{ zIndex: "1" }} className="oculus1" src={oculus1} alt="" />
    </div>
  );
};

export default FirstComp;
