import React from "react";
import { crossMark_SVG } from "../../utils/svg";

export const SearchError = () => {
  return (
    <div
      className=" pointer-events-none gap-1 flex items-center justify-center bg-white/80 rounded px-1 pr-2.5 "
    >
      <div className="p-1 ">{crossMark_SVG}</div>
      <p className=" text-[12.5px] font-semibold ">No search result found</p>
    </div>
  );
};
