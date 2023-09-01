import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/movie/:id", element: <MovieDetails /> },
  ]);

  return (
    <RouterProvider router={router}>
      <Outlet />
    </RouterProvider>
  );
};

export default App;
