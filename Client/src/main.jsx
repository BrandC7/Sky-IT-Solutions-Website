import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter([
  {
    // For github pages deployment use "/Sky-IT-Solutions-Website/" on the next line.
    //path: "/",
    path: "/Sky-IT-Solutions-Website/",
    element: <App />,
    errorElement: <NotFoundPage />,

  },
]);

{
  console.log("Made by: Brandon Cavazos");
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);