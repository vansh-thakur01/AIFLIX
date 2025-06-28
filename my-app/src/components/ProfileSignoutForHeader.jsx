import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';
import { useEffect, useRef, useState } from 'react';

export const ProfileSignout = () => {
    const [showMenu, setShowMenu] = useState(false); 
    const videoRef = useRef(null);
    const reverseTimer = useRef(null);

    useEffect(()=>{
        return () => {if(reverseTimer.current) clearInterval(reverseTimer.current)};
    },[]);

    const handleShowMenu = function(flag) {
        setShowMenu(flag);
    }

    const playForward = function(){
        const v = videoRef.current;
        if(!v) return;
        v.playbackRate = 2;
        if(reverseTimer.current){
            clearInterval(reverseTimer.current);
            reverseTimer.current = null;
        } 
        v.play();
    }

    const playBackward = function(){
        const v = videoRef.current;
        if(!v) return;
        v.pause();

        reverseTimer.current = setInterval(()=>{
            if(v.currentTime >= 0.05){
                v.currentTime = Math.max(0,v.currentTime - 0.033);
            }
            else{
                clearInterval(reverseTimer.current);
                reverseTimer.current = null;
            }
        },33)

    }

    const handleSignout = function(){
        signOut(auth).then(() => {
            console.log("done")
            }).catch((error) => {
            // An error happened.
            console.log(error);

            });
        }

    return (
      <div className="relative">
        <div
          onMouseEnter={() => handleShowMenu(true)}
          onMouseLeave={() => handleShowMenu(false)}
          className="flex items-center gap-2"
        >
          <video
            ref={videoRef}
            className="w-20 h-20 bg-amber-300"
            muted
            preload="metadata"
          >
            <source src="/profileMonkeyyy.mp4"></source>
          </video>
          <div className="pointer-events-none text-gray-300">{showMenu ? "▲" : "▼"}</div>
        </div>
        {showMenu && (
          <div
            onMouseEnter={() => handleShowMenu(true)}
            onMouseLeave={() => handleShowMenu(false)}
            className="absolute right-10 "
          >
            <div className="h-5 pointer-events-none text-gray-300 flex justify-end pr-5">
              ▲
            </div>
            <div className="bg-black text-[14px]  w-55 text-white py-4 opacity-92">
              <div className="px-4">Manage Profile</div>
              <div className="border-b-2 pb-5 mb-2 border-gray-600"></div>
              <div className="space-y-2 px-4 py-1">
                <div>Account</div>
                <div>Help Center</div>
                <button onClick={handleSignout} onMouseEnter={playForward} onMouseLeave={playBackward} className="">
                  Sigh out of Vetflix?
                </button>
              </div>
            </div>
          </div>
        )}
        <div>{/* <button onClick={handelSignout}>Sign Out?</button> */}</div>
      </div>
    );}
