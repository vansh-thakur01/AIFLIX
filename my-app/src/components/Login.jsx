import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidOnBlur } from "../utils/helperFunctions/checkValidInfoOfSignIn";
import {
  signIn as signInHelper,
  signUp as signUpHelper,
} from "../utils/firebase/signInUp";
import { auth } from "../utils/firebase/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/store/slice/userSlice";

export const Login = () => {
  let [signup, setSignup] = useState(false);
  const [showPswd, setShowPswd] = useState(false);
  const [validEmailEvent, setvalidEmailEvent] = useState(true);
  const [validPswdEvent, setvalidPswdEvent] = useState(true);
  const [wrongCredential, setWrongCredential] = useState(null);
  const refUserName = useRef(null);
  const dispatch = useDispatch();

  const handelBlur = (e) => {
    checkValidOnBlur(e, setvalidEmailEvent, setvalidPswdEvent);
  };

  const handelSignInSignUp = async () => {
    checkValidOnBlur(
      typeof validEmailEvent !== "object" ? "email" : validEmailEvent,
      setvalidEmailEvent,
      setvalidPswdEvent
    );
    checkValidOnBlur(
      typeof validPswdEvent !== "object" ? "pswd" : validPswdEvent,
      setvalidEmailEvent,
      setvalidPswdEvent
    );

    if (!validEmailEvent || !validPswdEvent) return;

    const email = validEmailEvent?.target?.value;
    const paswd = validPswdEvent?.target?.value;

    try {
      if (!signup && email && paswd) {
        const user = await signUpHelper(auth, email, paswd);
        setWrongCredential(null);
        // navigate("/browse");
      } else if (signup && email && paswd) {
        const user = await signInHelper(
          auth,
          refUserName.current.value,
          email,
          paswd
        );
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        // navigate("/browse");
      }
    } catch (err) {
      setWrongCredential(err.message);
    }
  };

  const toggleSignInForm = () => {
    setSignup(!signup);
  };

  return (
    <div>
      <BasicBgWithHeader Header={() => <Header signin={false} />} shade={5} />
      <div className="bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-87">
        <div className="px-14 pb-25 pt-12 w-[480px] h-[540px]">
          <h2 className="text-amber-50 text-4xl mb-7 font-bold">
            {signup ? "Sign Up" : "Sign In"}
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="z-6 mb-1">
            {signup && (
              <input
                ref={refUserName}
                type="text"
                name="user-name"
                placeholder="Full name"
                className="w-full px-4 py-4 mb-6 focus:outline-0 border-2 bg-gray-950 border-gray-400 rounded text-white text-[15px]"
              ></input>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className={`w-full px-4 py-4 mb-2 border-2 bg-gray-950 ${
                validEmailEvent == null ? "border-red-500" : "border-gray-400"
              } rounded text-white text-[15px] focus:outline-none`}
              onFocus={() => setvalidEmailEvent(true)}
              onBlur={handelBlur}
            ></input>
            <div className="text-red-500 text-[14px] h-1 flex items-center">
              {validEmailEvent == null &&
                "⨂ Please enter a valid email address."}
            </div>
            <div
              className={`relative w-full px-4 py-3 mt-3 border-2 bg-gray-950 ${
                validPswdEvent == null ? "border-red-500" : "border-gray-400"
              } rounded flex justify-between`}
            >
              <input
                type={showPswd ? "text" : "password"}
                name="pswd"
                placeholder="Passowrd"
                className="text-white py-1 text-[15px] outline-none focus:ring-0 focus:outline-none flex-1"
                onFocus={() => {
                  setvalidPswdEvent(true), setWrongCredential(null);
                }}
                onBlur={handelBlur}
              ></input>
              <button
                type="button"
                className="hover:bg-gray-700 transition-color cursor-pointer duration-500 rounded-[100%] absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                onClick={() => setShowPswd(!showPswd)}
              >
                {showPswd ? "👀" : "🙈"}
              </button>
            </div>
            <div className="text-red-500 text-[14px] h-6 flex items-center ">
              {(validPswdEvent == null &&
                "⨂ Password must contain 6 to 16 charaters.") ||
                (wrongCredential && wrongCredential)}
            </div>
          </form>
          <button
            type="submit"
            className="mb-5 w-full px-5 py-2 cursor-pointer bg-red-700 rounded font-semibold text-white text-lg opacity-100"
            onClick={handelSignInSignUp}
          >
            {signup ? "Sign Up" : "Sign In"}
          </button>
          <div className="text-[16px] ">
            <p className="text-blue-100">
              {signup ? "Already have account?" : "New to Netflix?"}
              <span
                onClick={toggleSignInForm}
                className="font-bold cursor-pointer text-white"
              >
                {signup ? "Sign In." : "Sign up now."}
              </span>
            </p>
          </div>
          <p className="text-[14px] text-white/60 mt-4">
            This page is secured with Firebase Authentication to protect your
            account.
          </p>
        </div>
      
      </div>
    </div>
  );
};
