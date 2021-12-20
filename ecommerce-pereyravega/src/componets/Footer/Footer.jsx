import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer " variant="light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Luigi's Bar</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} All rights reserved Jorge Pereyra Vega
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;