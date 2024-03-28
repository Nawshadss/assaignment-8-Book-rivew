import React from "react";
// Import your CSS file for styling

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-box">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
