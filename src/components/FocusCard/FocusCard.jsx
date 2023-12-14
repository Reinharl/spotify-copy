function FocusCard() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#303030] to-[#121212] h-screen">
        {/*____________TITLE BOX ____________ */}

        <div className="flex justify-between p-2">
          <h1 className="text-white font-bold">Playlist Spotify</h1>
          <h2 className="text-grigioTesto text-sm font-bold cursor-pointer">
            Mostra tutto
          </h2>
        </div>

        {/*____________CARD BOX ____________ */}

        <div className="w-[170px] h-[250px] bg-griginoBg hover:bg-[#404040] duration-300 ease-in-out rounded-lg p-3 flex flex-col gap-1 cursor-pointer m-2">
          <div>
            <div className="w-36 h-36 relative rounded-lg mb-2 bg-red-500 shadow-md  shadow-[#20202088]">
              <img
                className="absolute top-2 left-2 w-4 "
                src="src/images/spotify-logo-no-bg.png"
                alt="logo"
              />
              <h1 className="absolute text-md right-2 top-1  font-bold text-white">
                Happy Hits
              </h1>
            </div>
          </div>

          <h1 className="font-bold  text-biancoTesto">Happy Hits!</h1>
          <p className="text-xs text-grigioTesto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default FocusCard;
