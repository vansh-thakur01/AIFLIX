import { useNavigate } from "react-router-dom";
import { BasicBgWithHeader } from "./BasicBgWithHeader";
import Header from "./Header";
import { useEffect, useState } from "react";

const Home = () => {
    const [img, setImg] = useState([]);
    const image = ["./js.png", "./react.png", "./gemini.png", "./redux.png"]
    const images = [...image,...image];

    return (
      <div className="flex justify-center  mt-47 ">
        <BasicBgWithHeader Header={() => <Header signin={true} />} shade={60} />
        <div className="text-[26px] w-dvw font-semibold text-center text-white/85 relative z-10 ">
          <h1 className="text-7xl font-bold text-center mb-3">Welcome to AIFLIX</h1> 
          <h2 className="mb-15 ">Here you have your own personalized movie recommender powered by Gemini AI. It can suggests movies based on your mood using smart AI integration.</h2>
        <div className="w-dvw flex justify-center">
          <div className="w-[900px] text-[19px] text-center text-white/60 [&>h4]:underline">
          <h3 className="mb-1 text-[22px]"> This project also includes several thoughtful features to enhance your experience:</h3>
            <ul className="">
              <li> Multilingual</li>
              <li> Infinite scrolling,with seamless movie loading as you reach the end of the list.</li>
              <li> Debounced search for efficient and smooth querying.</li>
              <li> Elegant error handling, sometimes even with animations.</li>
              <li> A playful interactive profile section that teases you when you hover over the sign-out button 😜.</li>
              <li className="text-white/75"> Best of all – it's performance-optimized. There are no unnecessary background events, and all logic is <span className="pl-7">structured efficiently thanks to my strong foundation DSA.</span></li>
              {/* <li>You can sing up by clicking ont the sign in button and find signup there</li> */}
            </ul>
          </div>
        </div>
        <p className="my-16 text-white/85">New here? Click the "Sign In" button and choose "Sign Up" to create your account.</p>
        <div className="flex justify-center mt-20">
          <div className="relative w-[385px]  h-[100px] overflow-hidden ">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l  from-black/90 to-transparent z-10" />
            <div className="flex  gap-9 hover:[animation-play-state:paused] pt-5 animate-scroll-left [&>img]:w-15">
              {images.map(src =><img className="rounded-xl hover:scale-120 transition-all duration-400"  src={src}/>)}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Home;

