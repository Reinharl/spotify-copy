import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Home() {
    return (
        <div className="flex gap-1 bg-black">
            <Sidebar/>
            <div className="flex flex-col w-[77%] p-2">
                <Navbar/>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;