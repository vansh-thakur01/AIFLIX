import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProfileSignout } from "./ProfileSignoutForHeader";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/slice/userSlice";
import { auth } from "../utils/firebase/fireBase";
import { toggleGptSearchView } from "../utils/store/slice/gptSlice";
import { LanguageSelector } from "./LanguageSelector";
import { SearchButton } from "./search/SearchButton";
import lang from "../utils/languageConstant";

const Header = ({ signin, loggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const language = useSelector(store => store?.config?.lang);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        location.pathname !== "/browse" && navigate("/browse");
      } else {
        dispatch(removeUser());
        if(location.pathname !== "/" && location.pathname !== "/login")  navigate("/");
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className={`${loggedIn ? "w-[140rem]" : "w-[76rem]"} `}>
      <div className=" h-[86px] flex justify-between items-center">
        <div className="w-40 mt-4 pb-3 flex gap-14">
          <img src="./AIFLIX.png" alt="logo"></img>
          {loggedIn && (
            <div className="text-white/85 text-[19px] font-semibold flex gap-9">
              <button onClick={()=>{
                let e = document.querySelector("#search");
                let e2 = document.querySelector("#homeDisplay");
                let input = document.querySelector("#searchInput");
                if (input.classList.contains("opacity-100")) e.click();
                if(e2) e2.scrollIntoView({behavior:"smooth"})

              }}  className="cursor-pointer">{lang[language].Home}</button>
              <button onClick={()=>{
                let e = document.querySelector("#movies");
                e.scrollIntoView({behavior:"smooth"})
              }} className="cursor-pointer">{lang[language].Movies}</button>
            </div>
          )}
        </div>
        {loggedIn && (
          <div className="flex items-center gap-9 cursor-pointer pr-7">
            <div className="">
              <SearchButton />
            </div>
            <div className="w-20 h-20">
              <ProfileSignout />
            </div>
          </div>
        )}
        {signin && (
          <div className="h-full gap-3 flex items-center text-amber-50">
            <LanguageSelector />
            <Link to="/login">
              <button className="py-1.5 cursor-pointer px-4 bg-red-500 rounded-l rounded-r font-bold">
                {lang[language].SignIn}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
