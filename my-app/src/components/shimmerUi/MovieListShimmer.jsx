import Skeleton from "react-loading-skeleton";

export const MovieListShimmer = () => {
  const listLength = 20;
  const facklist = new Array(listLength).fill("");
  return (
    <div >
      <div>
        {/* <div className=" text-[26px] font-semibold mb-2 text-amber-50 ">
          <Skeleton
            width={250}
            height={45}
            duration={2}
            baseColor="#3B3B3B"
            borderRadius="0xp"
            highlightColor="#525252"
          />
        </div> */}
        <div className="flex overflow-y-hidden overflow-hidden no-scrollbar mb-10">
          <div className="flex gap-1">
            {facklist.map((facklist,i) => (
              <Skeleton
                width={120}
                height={180}
                duration={2}
                baseColor="#3B3B3B"
                borderRadius="0xp"
                highlightColor="#525252"
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
