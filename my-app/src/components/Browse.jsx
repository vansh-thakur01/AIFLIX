import Header from "./Header";
import { useNowPlayingMiveis } from "../hooks/useNowPlayingMovies";
import BrowseMainContainer from "./BrowseMainContainer";
import BrowseSecondaryContainer from "./BrowseSecondaryContainer";

const Browse = () => {
   
    useNowPlayingMiveis();

    return (
        <div className="flex justify-center mx-3 mt-4">
            <div>
                <Header loggedIn={true}/>
                <BrowseMainContainer/>
                <BrowseSecondaryContainer/>
            </div>
        </div>
    )
}

export default Browse;