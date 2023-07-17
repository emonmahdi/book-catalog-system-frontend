import React from "react";
import bg from "../../assets/images/bg-1.jpg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  decrement,
  increment,
} from "../../redux/features/counter/counterSlice";

export default function HeroBanner() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
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
            {/* redux */}
            <div className="mt-12 py-12">
              <button
                onClick={() => dispatch(increment())}
                className="btn btn-primary"
                aria-label="Increment value"
              >
                Increment
              </button>
              <span className="px-4">{count}</span>
              <button
                onClick={() => dispatch(decrement())}
                className="btn btn-secondary"
                aria-label="Decrement value"
              >
                Decrement
              </button>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
}
