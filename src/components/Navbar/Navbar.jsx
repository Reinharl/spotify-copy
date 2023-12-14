/* eslint-disable react/no-unknown-property */
function Navbar() {

    return <div className="flex justify-between items-center h-16 pl-10 bg-[#0f0f0f] rounded-t-xl mt-2 mr-2">
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 "  > 
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" className="bg-black rounded-full p-1 cursor-not-allowed " viewBox="0 0 320 512"><path fill="#868686" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" className="bg-black rounded-full p-1 cursor-not-allowed " viewBox="0 0 320 512"><path fill="#868686" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
             </div>
            <div className="border-2 rounded-3xl px-4 py-1 h-12 bg-[#2a2a2a] hover:bg-[#3a3a3a] hover:border-sm hover:border-[#4a4a4a] flex items-center gap-2 border-transparent focus:border-2 focus:border-white ">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#f6f6f6" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                <input type="text" placeholder="Cosa vuoi ascoltare?" className="h-9 bg-transparent text-white outline-none"/>
            </div>
        </div>
        <div className="flex gap-7 pr-10 font-bold text-lg">
            <button className="bg-[#0f0f0f] text-grigioTesto hover:scale-105 hover:text-biancoTesto">Iscriviti</button>
            <button className="bg-white text-black rounded-3xl px-7 py-2 hover:scale-105">Accedi</button>
        </div>
    </div>;
}

export default Navbar;