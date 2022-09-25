/*
 * Copyright (c) Joseph Prichard 2022.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import "./index.css"
import Analysis from "./components/Analysis";
import Catalog from "./components/Catalog";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Landing from "./components/Landing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/catalog",
        element: <Catalog/>,
    },
    {
        path: "/analysis",
        element: <Analysis/>
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById('root')
);
