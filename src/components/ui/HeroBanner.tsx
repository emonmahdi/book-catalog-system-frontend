import React from "react";
import bg from "../../assets/images/bg-1.jpg";

export default function HeroBanner() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center top",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to our awesome Book Catalog
            </h1>
            <p className="mb-5">
              There are lots of book here. You can choose any kind of book and
              read. Every latest book available ours.
            </p>
            <button className="btn btn-primary">All Books</button>
          </div>
        </div>
      </div>
    </div>
  );
}
