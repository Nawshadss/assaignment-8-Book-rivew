import React from "react";

import heroImage from "../assets/pngwing 1.png";

const Hero = () => {
  return (
    <div className="mt-8">
      <div className="hero bg-base-200 flex justify-center p-8 rounded-2xl">
        <div className="hero-content flex-col gap-28 lg:flex-row-reverse">
          <img src={heroImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold ">
              Books to freshen up <br />
              your bookshelf
            </h1>

            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
