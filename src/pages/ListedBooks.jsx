import { NavLink, Outlet } from "react-router-dom";
import "../Nav/Navbar.css";

const ListedBooks = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center bg-[#13131310] py-4 rounded-lg">
        Book{" "}
      </h1>
      <div className="dropdown dropdown-bottom items-center flex justify-center m-3">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Rating</a>
          </li>
          <li>
            <a>Number of Yewars</a>
          </li>
          <li>
            <a>Pushlished Year</a>
          </li>
        </ul>
      </div>
      <br />

      <div id="nav" role="tablist" className="tabs tabs-lifted">
        <NavLink to="read" role="tab" className="tab  flex items-center">
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
