import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex justify-end">
      {/*contenitore di tutto il footer */}
      <div className="w-screen  h-[353px] flex  flex-col   p-2  bg-grigioBg text-grigioTesto rounded-b-md">
        {/* contenitore parte1 dell footer */}
        <div className="flex justify-between  px-5 py-2">
          {/* azienda community link utili */}
          <div className="flex">
            <div className="pr-20">
              <h2 className="text-[20px] text-biancoTesto pb-[5px] ">Azienda</h2>
              <ul className="flex flex-col">
                <Link className="pb-[5px] hover:text-biancoTesto ">Chi siamo</Link>
                <Link className="pb-[5px] hover:text-biancoTesto"> Opportunità di lavoro</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">For the Record</Link>
              </ul>
            </div>

            <div className="pr-20">
              <h2 className="text-[20px] text-biancoTesto pb-[5px]">
                Community
              </h2>
              <ul className="flex flex-col">
                <Link className="pb-[5px] hover:text-biancoTesto">Per artisti</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">Sviluppatori</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">Pubblicità</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">Investitori</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">Venditori</Link>
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] text-biancoTesto pb-[5px]">Link</h2>
              <ul className="flex flex-col ">
                <Link className="pb-[5px] hover:text-biancoTesto">Assistenza</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">App per cellulare gratuita</Link>
                <Link className="pb-[5px] hover:text-biancoTesto">Diritti del consumatore</Link>
              </ul>
            </div>
          </div>
          {/*icone */}
          <div>
            <ul className="flex">
              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full mr-[10px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className=""
                  style={{ color: "#f6f6f6" }}
                />
              </Link>

              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full  mr-[10px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className=" "
                  style={{ color: "#f6f6f6" }}
                />
              </Link>
              <Link className="bg-griginoBg w-[40px] h-[40px] rounded-full  mr-[10px] flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className=""
                  style={{ color: "#f6f6f6" }}
                />
              </Link>
            </ul>
          </div>
        </div>
        <div className="mb-10">
          <div className="h-[1px] bg-grigioTesto " > </div>
          <div className="flex justify-start  px-5 py-2">
           

            <div>
              <p >@2023 Spotify AB</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
