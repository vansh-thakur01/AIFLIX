import React from "react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute z-6 h-screen flex items-center w-full px-14 bg-gradient-to-r from-black to-transparent to-[60%]">
      <div className="text-amber-50">
        <h1 className="text-9xl font-bold w-xl text-left mb-6 leading-28 ">
          {title}
        </h1>
        <p className="w-2xl mb-5">{overview}</p>
        <div className="flex gap-3">
          <button className="bg-amber-50 text-black flex justify-center rounded items-center p-2 px-6 text-2xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-7 fill-black"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            Play
          </button>
          <button className="bg-white/30 flex gap-3 justify-center text-white rounded items-center p-2 px-6 text-2xl font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-7 h-7 fill-white"
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
