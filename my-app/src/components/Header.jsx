import { Link, useLocation, useNavigate } from "react-router-dom";
import { NETFLIX_IMG, ProfilePhoto } from "../utils/constants";
import { ProfileSignout } from "./ProfileSignoutForHeader";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/store/slice/userSlice";
import { auth } from "../utils/firebase/fireBase";
import { SEARCH_SVG } from "../utils/svg";
import { toggleGptSearchView } from "../utils/store/slice/gptSlice";
import { LanguageSelector } from "./LanguageSelector";
import { SearchButton } from "./search/SearchButton";

const Header = ({ signin, loggedIn }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const gptSearchShow = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        location !== "/browse" && navigate("/browse");
      } else {
        dispatch(removeUser());
        location !== "/login" && navigate("/login");
      }
    });

    return unsubscribe;
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className={`${loggedIn ? "w-[140rem]" : "w-[76rem]"} `}>
      <div className=" h-[86px] flex justify-between items-center">
        <div className="w-44 mt-4 pb-3">
          <img src="./AIFLIX.png" alt="logo"></img>
        </div>
        {loggedIn && (
          <div className="flex items-center gap-9 cursor-pointer pr-7">
            {/* {gptSearchShow && <LanguageSelector/> } */}
            <div>
              <SearchButton />
            </div>
            <div className="w-20 h-20">
              <ProfileSignout />
            </div>
          </div>
        )}
        {signin && (
          <div className="h-full flex items-center text-amber-50">
            <LanguageSelector />
            <Link to="/login">
              <button className="py-2 px-4 bg-black rounded-l rounded-r font-bold">
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
