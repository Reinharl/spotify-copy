/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Search from "./pages/Search";



import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";


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
