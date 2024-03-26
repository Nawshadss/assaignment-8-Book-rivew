import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
  },
]);

export default router;
