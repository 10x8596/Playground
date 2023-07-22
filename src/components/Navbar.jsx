import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "black",
        padding: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: "0.9",
      }}
    >
      <div>
        <h1
          text="Hello World"
          style={{
            fontSize: "2rem",
            color: "red",
            textShadow:
              "0 0 10px #FF0000, 0 0 20px #FF7F00, 0 0 30px #FFFF00, 0 0 40px #00FF00, 0 0 50px #0000FF, 0 0 60px #4B0082, 0 0 70px #9400D3",
          }}
        />
      </div>
      <div>{/* Add the mail icon here */}</div>
    </nav>
  );
};

export default Navbar;

/* Add mail icon, github icon, codepen icon,  */
