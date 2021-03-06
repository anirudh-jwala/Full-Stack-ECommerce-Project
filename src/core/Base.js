import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h4>
            If you got any questions, reach me out on instagram @anirudhjwala
          </h4>
          <button className="btn btn-warning btn-lg">
            <a
              href="https://github.com/anirudh-jwala"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact Now
            </a>
          </button>
        </div>
        <div className="container-fluid text-center text-white mt-2">
          An Amazing place to buy TShirts
        </div>
      </footer>
    </div>
  );
};

export default Base;
