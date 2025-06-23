import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidOnBlur } from "../utils/checkValidInfoOfSignIn";
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { signIn as signInHelper,signUp as signUpHelper} from "../utils/signInUp";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

export const Login = () => {
  let [signup, setSignup] = useState(false);
  const [showPswd, setShowPswd] = useState(false);
  const [validEmailEvent, setvalidEmailEvent] = useState(true);
  const [validPswdEvent, setvalidPswdEvent] = useState(true);
  const [wrongCredential,setWrongCredential] = useState(null);
  const refUserName = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

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

    try{
        if (!signup && email && paswd) {
          // const user = await signUpHelper(auth, email, paswd).then((user) => {
          //   console.log(user,"user")
          //   user && navigate("/browse");
          // }).catch(err => {throw err})
          const user = await signUpHelper(auth, email, paswd);
          navigate("browse");
        } 
        else if (signup && email && paswd) {
        //   signInHelper(auth, refUserName.current.value, email, paswd).then((user) => {
        //   user && dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
        //   user && navigate("/browse");
        //   });
          const user = await signInHelper(auth, refUserName.current.value, email, paswd)
          dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
          navigate("/browse");
        }
    }
    catch(err){
      console.log("serawer")
      setWrongCredential(err.message)
    }
  };

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
                ref={refUserName}
                type="text"
                name="user-name"
                placeholder="Full name"
                className="w-full px-5 py-4 mb-6 border-2 bg-gray-950 border-gray-400 rounded text-white text-[17px]"
              ></input>
            )}
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className={`w-full px-5 py-4 mb-3 border-2 bg-gray-950 ${
                validEmailEvent == null ? "border-red-500" : "border-gray-400"
              } rounded text-white text-[17px] focus:outline-none`}
              onFocus={() => setvalidEmailEvent(true)}
              onBlur={handelBlur}
            ></input>
            <div className="text-red-500 text-[15px] h-1 flex items-center">
              {validEmailEvent == null &&
                "⨂ Please enter a valid email address."}
            </div>
            <div
              className={`relative w-full px-5 py-4 mt-4 border-2 bg-gray-950 ${
                validPswdEvent == null ? "border-red-500" : "border-gray-400"
              } rounded flex justify-between`}
            >
              <input
                type={showPswd ? "text" : "password"}
                name="pswd"
                placeholder="Passowrd"
                className="text-white text-[17px] outline-none focus:ring-0 focus:outline-none flex-1"
                onFocus={() => setvalidPswdEvent(true)}
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
              {validPswdEvent == null &&
                "⨂ Password must contain 6 to 16 charaters."}
                {wrongCredential && wrongCredential}
            </div>
          </form>
          <button
            type="submit"
            className="mb-10 w-full px-5 py-3 bg-red-700 rounded font-semibold text-white text-lg opacity-100"
            onClick={handelSignInSignUp}
          >
            {signup ? "Sign Up" : "Sign In"}
          </button>
          <div className="text-[17px] ">
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
        </div>
      </div>
    </div>
  );
};
