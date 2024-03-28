import React from "react";
import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import "../Nav/Navbar.css";

const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-[#13131310] py-4 rounded-lg">
        Book{" "}
      </h1>
      <div>drop down</div>
      <br />

      <div id="nav" role="tablist" className="tabs tabs-lifted">
        <NavLink
          to="/listed-books/read"
          role="tab"
          className="tab  flex items-center"
        >
          Read
        </NavLink>
        <NavLink
          to="/listed-books/wish-list"
          role="tab"
          className="tab tab-active flex items-center"
        >
          WishList
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
