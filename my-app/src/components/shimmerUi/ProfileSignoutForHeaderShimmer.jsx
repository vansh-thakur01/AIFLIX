import React from 'react'
import Skeleton from 'react-loading-skeleton';


export const ProfileSignoutForHeaderShimmer = () => {
  return (
    <div className="relative">
        <div className="flex items-center gap-2">
           <Skeleton
            width="5rem"
            height="5rem"
            duration={2}
            baseColor="#3B3B3B"
            borderRadius="0xp"
            highlightColor="#525252"
        />
            <div className="pointer-events-none text-gray-300">▼</div>
        </div>
    </div>
   )}
