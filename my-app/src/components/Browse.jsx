import Header from "./Header";
import { useNowPlayingMiveis } from "../hooks/useNowPlayingMovies";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";

const Browse = () => {
   
    useNowPlayingMiveis();

    return (
      <div className="">
        <div className="relavite">
          <div className="p-5 px-9  absolute h-screen flex top-0 left-0 right-0 bottom-0 justify-center z-7 bg-gradient-to-b from-black to-transparent to-[50%]">
            <Header loggedIn={true} />
          </div>
          <BrowseMainContainer />
          {/* <BrowseSecondaryContainer/>  */}
        </div>
      </div>
    );
}

export default Browse;