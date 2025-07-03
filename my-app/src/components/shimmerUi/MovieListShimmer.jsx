import Skeleton from "react-loading-skeleton";

export const MovieListShimmer = () => {
  const listLength = 11;
  const facklist = new Array(listLength).fill("");
  return (
    <div>
      <div>
        <div className=" text-[26px] font-semibold mb-2 text-amber-50 ">
          {/* <Skeleton
            width={250}
            height={45}
            duration={2}
            baseColor="#3B3B3B"
            borderRadius="0xp"
            highlightColor="#525252"
          /> */}
        </div>
        <div className="flex overflow-y-hidden overflow-hidden no-scrollbar mb-15">
          <div className="flex gap-2">
            {facklist.map((facklist) => (
              <Skeleton
                width={200}
                height={290}
                duration={2}
                baseColor="#3B3B3B"
                borderRadius="0xp"
                highlightColor="#525252"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
