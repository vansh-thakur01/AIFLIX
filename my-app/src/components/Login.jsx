import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidOnBlur } from "../utils/checkValidInfoOfSignIn";
import { use } from "react";

export const Login = () => {
  let [signup, setSignup] = useState(false);
  const [showPswd, setShowPswd] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPswd, setErrorPswd] = useState(false);

  const handelBlur = (e) => {
    checkValidOnBlur(e,setErrorEmail,setErrorPswd);
  }

  const toggleSignInForm = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <BasicBgWithHeader Header={() => <Header signin={false} />} shade={5} />
      <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-87">
        <div className="px-14 pb-25 pt-16 w-[500px] h-[700px]">
          <h2 className="text-amber-50 text-4xl mb-8 font-bold">
            {signup ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="z-6 mb-1">
            {signup && (
              <input
                type="text"
                placeholder="Full name"
                className="w-full px-5 py-4 mb-6 border-2 bg-gray-950 border-gray-400 rounded text-white text-[17px]"
              ></input>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className={`w-full px-5 py-4 mb-3 border-2 bg-gray-950 ${ errorEmail ? "border-red-500" : "border-gray-400" } rounded text-white text-[17px] focus:outline-none`}
              onFocus={() => setErrorEmail(false)}
              onBlur={handelBlur}
            ></input>
            <div className="text-red-500 text-[15px] h-1 flex items-center">
              {errorEmail && "⨂ Please enter a valid email address."}
            </div>
            <div
              className={`relative w-full px-5 py-4 mt-4 border-2 bg-gray-950 ${
                errorPswd ? "border-red-500" : "border-gray-400"
              } rounded flex justify-between`}
              >
              <input
                type={showPswd ? "text" : "password"}
                name="pswd"
                placeholder="Passowrd"
                className="text-white text-[17px] outline-none focus:ring-0 focus:outline-none flex-1"
                onFocus={() => setErrorPswd(false)}
                onBlur={handelBlur}
              ></input>
              <button
                type="button"
                className="hover:bg-gray-700 transition-color duration-500 rounded-[100%] absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                onClick={() => setShowPswd(!showPswd)}
              >
                {showPswd ? "👀" : "🙈"}
              </button>
            </div>
            <div className="text-red-500 text-[15px] h-7 flex items-center ">
              {errorPswd && "⨂ Password must contain 6 to 16 charaters."}
            </div>
          </form>
          <button
            type="submit"
            className="mb-10 w-full px-5 py-3 bg-red-700 rounded font-semibold text-white text-lg opacity-100"
          >
            {signup ? "Sign Up" : "Sign In"}
          </button>
          <div className="text-[17px] ">
            <p className="text-blue-100">
              New to Netflix?
              <span
                onClick={toggleSignInForm}
                className="font-bold cursor-pointer text-white"
              >
                Sign up now.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
