import { useSelector } from "react-redux";
import lang from "../utils/languageConstant"

export const GtpSearchBar = () => {
    const selectedLang = useSelector(store => store.config.lang);
    console.log(selectedLang,"+++++++++++++++++",lang.eng)
  return (
    <div className="p-[8%] felx justify-center">
      <div className=" bg-black">
        <form className="w-[100%] grid grid-cols-15 gap-2">
          <input
            className="p-6 bg-amber-50 w-full col-span-12 m-2"
            type="text"
            placeholder={lang[selectedLang].gtpSearchPlaceholder}
          ></input>
          <button className="bg-red-500 col-span-3 m-2 rounded-2xl text-white text-xl ">
            {lang[selectedLang].Search}
          </button>
        </form>
      </div>
    </div>
  );
}
