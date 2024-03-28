import React from "react";

import "../Nav/Navbar.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <div className="error-container">
        <div className="error-card">
          <h1>404 - Page Not Found</h1>
          <p>
            Oops! The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link to="/">Go to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
