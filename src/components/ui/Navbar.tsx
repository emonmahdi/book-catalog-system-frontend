/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/images/avater.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { setUser } from "../../redux/features/user/userSlice";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("log out");
    signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl">Book Catalog</a>
          </Link>
        </div>
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <Link to="/">
            <li>
              <a>Home</a>
            </li>
          </Link>
          <Link to="/all-books">
            <li>
              <a>All Books</a>
            </li>
          </Link>
        </ul>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={profileImg} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              {!user.email && (
                <>
                  <Link to="/login">
                    <li>
                      <a>Login</a>
                    </li>
                  </Link>
                  <Link to="/register">
                    <li>
                      <a>Register</a>
                    </li>
                  </Link>
                </>
              )}
              {user.email && (
                <>
                  <li onClick={handleLogout}>
                    <a>Log out</a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
