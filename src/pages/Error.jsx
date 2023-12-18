import logo from "../images/spotify-logo-no-bg.png";

function Error (){
    return (
        <div className=" h-[100vh] bg-grigioBg flex flex-col justify-center items-center gap-5">
            <img src={logo} className="w-[60px]" />
            <h1 className="text-biancoTesto text-[48px] font-bold text-center">Pagina non trovata</h1>
            <p className="text-grigioTesto text-[16px] font-semibold">Non riusciamo a trovare la pagina che cerchi.</p>
            <button className=" bg-biancoTesto text-black p-2 font-bold rounded-full w-[100px]">Home</button>
            <button className="text-biancoTesto font-semibold text-[15px]">Assistenza</button>
        </div>
    )
}

export default Error;