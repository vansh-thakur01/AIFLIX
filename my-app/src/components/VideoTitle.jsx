import React, { useEffect, useRef, useState } from "react";

const VideoTitle = ({title, overview}) => {
  const el = useRef(null);
  const [titleHeight, setTitleHeight] = useState(false);

  useEffect(()=>{
    const e = el.current;
    if(!e) return;

    const style = window.getComputedStyle(e);
    let lineHeigth = parseFloat(style.lineHeight);

    const maxTwoLineHeight = 2*lineHeigth+50;
    const actualHeigth = e.scrollHeight;
    setTitleHeight(actualHeigth > maxTwoLineHeight);
  
  },[]);

  return (
    <div className="absolute  z-6 h-screen flex items-center w-full px-11 bg-gradient-to-r from-black to-transparent to-[60%]">
      <div className="text-amber-50/95 mt-2">
        <h1 ref={el} className={`${titleHeight?"text-5xl leading-15 mb-3 ":"text-8xl leading-19.5  mb-5"} font-bold w-xl text-left `}>
          {title}
        </h1>
        <p className="w-[600px]  line-clamp-2 mb-4 text-[13px] tracking-wide">{overview}</p>
        <div className="flex gap-2">
          <button className="bg-amber-50/95 text-black flex justify-center rounded items-center px-4 h-9 text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 fill-black"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="bg-white/30 flex gap-2 justify-center text-white/90 rounded items-center p-2 px-4 h-9 text-xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-5 h-5 fill-white"
            >
              <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 16c61.9 0 112 50.1 112 112s-50.1 112-112 112S16 189.9 16 128 66.1 16 128 16zm0 56a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-16 40v8h8v52h-8v8h24v-8h-8v-60h-16z" />
            </svg>

            <p className="opacity-100">More info</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoTitle;
