import Skeleton from 'react-loading-skeleton';

export const VideoTitleShimmer = () => {
    return (
      <div className="absolute top-5 z-6 h-screen flex items-center w-full px-12 ">
        <div className="text-amber-50">
         <div className='mb-3'>
            <Skeleton
              width={380}
              height={70}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
              className='mb-1'
            />
            <Skeleton
              width={300}
              height={70}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
         </div>
          <div className=" mb-2  leading-4.5">
            <Skeleton
              width={540}
              height={12}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={510}
              height={12}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
          </div>
          <div className="flex gap-3">
            <Skeleton
              width={120}
              height={37}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={150}
              height={37}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
          </div>
        </div>
      </div>
    );
}
