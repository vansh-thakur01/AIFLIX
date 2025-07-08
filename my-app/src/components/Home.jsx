import { useNavigate } from "react-router-dom";
import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";
import { useEffect, useState } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { GITHUB_LOGO } from "../utils/svg";

const Home = () => {
    const [img, setImg] = useState([]);
    const image = ["./js.png", "./react.png", "./gemini.png", "./redux.png","./tailwind.png"]
    const images = [...image,...image];
    const selectedLang = useSelector(store =>  store.config.lang);

    return (
      <div className="flex flex-col min-h-screen">
      <div className="flex-grow justify-center  mt-37">
        <BasicBgWithHeader Header={() => <Header signin={true} />} shade={60} />
        <div className="text-[18px] w-dvw font-semibold text-center text-white/85 relative z-10 ">
          <h1 className="text-5xl font-bold text-center mb-3">Welcome to AIFLIX</h1> 
          <h2 className="mb-7">{lang[selectedLang].aiHeading}</h2>
        <div className="w-dvw flex justify-center">
          <div className="w-[900px] text-[16px] text-center text-white/60 [&>h4]:underline">
          <h3 className="mb-1 text-[16px]"> {lang[selectedLang].thoughtfulFeaturesHeading}</h3>
            <ul className={`${selectedLang === "hindi" && "space-y-1.5 tracking-wider"}`}>
              <li>{lang[selectedLang].multilingual}</li>
              <li>{lang[selectedLang].infiniteScroll}</li>
              <li>{lang[selectedLang].debouncedSearch}</li>
              <li>{lang[selectedLang].errorHandling}</li>
              <li>{lang[selectedLang].profileTease}</li>
              <li className="text-white/75">{lang[selectedLang].performance}</li>
            </ul>
          </div>
        </div>
        <p className="mt-9 mb-5 text-white/85">{lang[selectedLang].newUserInfo}</p>
        </div>
      </div>
      <footer className={` text-[11px] relative z-20 flex flex-col items-center justify-center ${selectedLang === "hindi" ? "mt-16" : "mt-23"}`}>
      <div className="flex justify-center ">
          <div className="relative w-[380px] z-10   h-[80px] overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l  from-black/90 to-transparent z-10" />
            <div className="flex  gap-9 hover:[animation-play-state:paused] pt-5 animate-scroll-left [&>img]:w-10">
              {images.map((src,i) =><img key={i} className="rounded-xl hover:scale-120 transition-all duration-400"  src={src}/>)}
            </div>
          </div>
        </div>
          <div>
            <p className="text-white/80">{lang[selectedLang].disclaimer} {<a href="https://github.com/vansh-thakur01/My-version-of-Netflix" className="underline cursor-pointer">{lang[selectedLang].author}</a> } {lang[selectedLang].disclaimerP2}</p>
            <div className="flex mt-2 justify-center items-center gap-2">
              <div className="cursor-pointer">
                <a href="https://github.com/vansh-thakur01/AIFLIX">{GITHUB_LOGO}</a>
                </div>
              <p className="text-white/85">&copy; 2025 AIFLIX</p>
            </div>          
          </div>
          
        </footer>
        </div>
    );
}

export default Home;

