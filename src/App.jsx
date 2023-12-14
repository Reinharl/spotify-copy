/* eslint-disable no-unused-vars */
import './App.css'
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
>>>>>>> 544c940a0301ae757d63d0430e185cc0c950218a

function App() {

    return (
<<<<<<< HEAD
        <div>
            <Router>
                <Routes>
                   <Route> </Route> 
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
=======
        <>
            <Router>
                <Navbar />
                <Routes>
                    
                </Routes>
            </Router>
        </>
>>>>>>> 544c940a0301ae757d63d0430e185cc0c950218a
    )
}

export default App
