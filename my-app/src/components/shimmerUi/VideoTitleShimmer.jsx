import Skeleton from 'react-loading-skeleton';

export const VideoTitleShimmer = () => {
    return (
      <div className="absolute top-0.5 z-6 h-screen flex items-center w-full px-14 ">
        <div className="text-amber-50">
         <div className='mb-5'>
            <Skeleton
              width={540}
              height={100}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
              className='mb-1'
            />
            <Skeleton
              width={500}
              height={100}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
         </div>
          <div className="w-2xl mb-5">
            <Skeleton
              width={540}
              height={17}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={520}
              height={17}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={500}
              height={17}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={480}
              height={17}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
          </div>
          <div className="flex gap-3">
            <Skeleton
              width={170}
              height={60}
              duration={2}
              baseColor="#3B3B3B"
              borderRadius="0xp"
              highlightColor="#525252"
            />
            <Skeleton
              width={200}
              height={60}
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
