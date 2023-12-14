import topGaming from "../images/top_gaming_1.jpg";

function Search() {
  return (
    <div className="bg-grigioBg">
      <h1 className="text-biancoTesto text-[40px] font-bold p-5">
        Sfoglia tutto
      </h1>
      <div className="bg-fuchsia-500 w-[15vw] h-[35vh] rounded mb-[10px] relative overflow-hidden">
        <div className="text-biancoTesto font-bold text-[30px] p-[10px]">Gaming</div>
        <div className="absolute bottom-[-20px] right-[-15px]  ">
          <img src={topGaming} className="  w-[7vw] rotate-[45deg] " />
        </div>
      </div>
    </div>
  );
}

export default Search;
