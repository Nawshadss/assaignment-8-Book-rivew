import React from "react";
import { NavLink } from "react-router-dom";

const ListNav = () => {
  return (
    <div>
      <div id="nav" role="tablist" className="tabs tabs-lifted">
        <NavLink
          to="/listed-books/read"
          role="tab"
          className="tab  flex items-center"
        >
          Read
        </NavLink>
        <NavLink
          to="wish-list"
          role="tab"
          className="tab tab-active flex items-center"
        >
          WishList
        </NavLink>
      </div>
    </div>
  );
};

export default ListNav;
