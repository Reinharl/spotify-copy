/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";

function App() {

    const router = createBrowserRouter([
        {path: "/", element: <Home/>},
        {path: "/search", element: <Search/>}
    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
