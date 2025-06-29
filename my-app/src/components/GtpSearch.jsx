import { GtpSearchBar }from "./GtpSearchBar"
import { GptMoviesSuggestion } from "./GptMoviesSuggestion"
import { MAIN_BG_IMG } from "../utils/config"

export const GtpSearch = () => {
  return (
    <div className="relative">
      <img
        src={MAIN_BG_IMG}
        className="h-vh w-full -z-10 absolute"
      ></img>

      <GtpSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
}
