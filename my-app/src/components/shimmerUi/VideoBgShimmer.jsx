import React from 'react'
import Skeleton from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";


export const VideoBgShimmer = () => {
  return (
    <div>
      <div className="relative w-full bg-amber-800 h-screen overflow-hidden">
        <Skeleton
          width={2500}
          height={4500}
          duration={2}
          baseColor="#171717"
          borderRadius="0xp"
          highlightColor="#525252"
        />
      </div>
    </div>
  );
}
