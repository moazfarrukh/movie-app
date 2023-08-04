import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";



export const AppRoutes = () => {

    const routes = [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/Movie/:id",
        element: <MovieDetail />,
      },
    ];
    return <RouterProvider router={createBrowserRouter(routes)} />
  };