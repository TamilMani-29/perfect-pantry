import React from "react";
import logo from "../assets/general-images/logo.png";

const AppDetails = () => {
  return (
    <div className="app-details-home">
        <div className="app-logo">
          <img className="logo-img" src={logo} alt="pantry-logo" />
        </div>
        <div className="app-name">The Perfect Pantry</div>
    </div>
  );
};

export default AppDetails;
