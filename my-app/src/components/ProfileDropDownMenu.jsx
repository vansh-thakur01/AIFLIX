import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeLang } from '../utils/configSlice';
import lang from '../utils/languageConstant';

export const ProfileDropDownMenu = ({playForward, playBackward}) => {
    const [activeMenuOption, setActiveMenuOption ] = useState(false);
    let [activateMenuOption, setActivateMenuOption] = useState({});
    const [currLang,setcurrLang] = useState("eng");
    const selectedLang = useSelector(store=> store.config.lang);
    const dispatch = useDispatch();

    console.log("saf");
    const handleSignout = function () {
      signOut(auth)
        .then(() => {
          console.log("done");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    };

    const handleOpenMenu = (key)=>{
      setActivateMenuOption((prev) => {
        return {
          ...prev,
          [key]: !prev[key]
        }
      })
    }

    const handleLanguageChange = (e)=>{
      if(e.target.tagName !== "P") return;
      dispatch(changeLang(e.target.dataset.lang));
    }
    console.log(activateMenuOption?.manage,"000000000000000000")
  return (
    <div className="">
      <div className="h-5 pointer-events-none text-gray-300 flex justify-end pr-5">
        ▲
      </div>
      <div className={`bg-black/90 text-[17px] min-w-60 max-w-80 text-white py-4 opacity-92 tracking-wide ${selectedLang === "hindi" && "tracking-widest text-[17px]"}`}>
        <div className='px-4 ' >
          <button onMouseLeave={() => setActiveMenuOption(false)} onMouseEnter={() => setActiveMenuOption(true)} onClick={()=>handleOpenMenu("manage")} className={`${(activeMenuOption || activateMenuOption.manage) && "underline"}`}>{lang[selectedLang].ManageProfile}</button>

          <div className={`text-[15.9px] border-l-2 pl-2 space-y-0.5 transition-all duration-500 ${activateMenuOption?.manage ?"mt-2 max-h-80 opacity-100 pointer-events-auto": "max-h-0 opacity-0 pointer-events-none"}`} >
            <div className='flex gap-4 items-center'>
              <p onClick={()=>handleOpenMenu("language")} >{lang[selectedLang].Language}</p>
                <div onClick={handleLanguageChange} className={` ${activateMenuOption?.language ? "opacity-100 pointer-events-auto" : " opacity-0 pointer-events-none"} tracking-normal [&>p]:hover:scale-110 [&>p]:transition-all t [&>p]duration-500 flex text-[14px] [&>p]:bg-gray-700/90 [&>p]:px-1.5 gap-2 `}>
                  <p data-lang={"hindi"} className={`${selectedLang === "hindi" && " !bg-gray-500"} `}>Hindi</p>
                  <p data-lang={"eng"} className={`${selectedLang === "eng" && " !bg-gray-500"} `} >English</p>
                </div>
            </div>
            <p>{lang[selectedLang].More}</p>
          </div>

        </div>
        <div className={`border-b-2 pb-5 mb-2 border-gray-600`}></div>
        <div className={`space-y-2 px-4 py-1 [&>*]:hover:underline  ${selectedLang === "hindi" && "text-[17px]"}`}>
          <div>{lang[selectedLang].Account}</div>
          <div>{lang[selectedLang].HelpCenter}</div>
          <button
            onClick={handleSignout}
            onMouseEnter={playForward}
            onMouseLeave={playBackward}
            className="w-fit whitespace-nowrap"
          >
            {lang[selectedLang].SignoutofMetflix}
          </button>
        </div>
      </div>
    </div>
  );
}
