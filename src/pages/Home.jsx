import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";

function Home() {
    return (
        <div className="flex bg-black h-screen">
            <Sidebar/>
            <div className="flex flex-col md:w-[78%] md:p-2">
                <div className="flex-1 overflow-y-auto mr-2 rounded-t-md">
                    {/* Il resto del tuo componente SearchCard o altre cose qui */}
                    <Navbar/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Home;