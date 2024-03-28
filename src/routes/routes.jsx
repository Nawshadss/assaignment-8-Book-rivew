import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";
import ReadBooks from "../pages/listedpages/ReadBooks";
import WishList from "../pages/listedpages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("data.json"),
      },
      {
        path: "listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listed-books/read",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "/listed-books/wish-list",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/details/:id",
        element: <BookDetails />,
        loader: () => fetch("data.json"),
      },
    ],
  },
]);

export default router;
