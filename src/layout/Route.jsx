import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import App from "../App";
import ShowSummary from "../Components/Home/ShowSumarry/ShowSummary";

const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <p>Eroor</p>,
        children: [
          {
            path: "/",
            element: <Home/>,
          },
          {
            path:"/show/:id",
            element: <ShowSummary/>,
          },
        ],
      },
    ]);

    export default router;