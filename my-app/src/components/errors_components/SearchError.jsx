import React from "react";
import { crossMark_SVG } from "../../utils/svg";

export const SearchError = () => {
  return (
    <div
      className="flex items-center justify-center bg-white/80 rounded px-1 pr-2.5 "
    >
      <div className="p-2 ">{crossMark_SVG}</div>
      <p className=" text-[18px] font-semibold">No search result found</p>
    </div>
  );
};
