/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import FocusCard from "./components/FocusCard/FocusCard";

function App() {
  return (
    <>
      <Router>
        <div className="flex gap-1 bg-black">
          <Sidebar />
          <div className="flex flex-col w-[80%]">
            <Navbar />

            <Routes>
              <Route></Route>
            </Routes>
            <FocusCard />
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
