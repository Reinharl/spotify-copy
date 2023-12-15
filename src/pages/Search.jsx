/* eslint-disable no-unused-vars */
import SearchCard from "../components/SearchCard/SearchCard";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";

function Search() {
    return (
        <div className="flex bg-black">
            <Sidebar/>
            <div className="flex flex-col md:w-[77%] md:p-2">
                <Navbar/>
                <div className="flex-1 overflow-y-auto mr-2">
                    {/* Il resto del tuo componente SearchCard o altre cose qui */}
                    <SearchCard/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default Search;