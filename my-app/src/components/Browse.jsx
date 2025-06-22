import Header from "./Header";
const Browse = () => {
    return (
        <div className="flex justify-center mx-3 mt-4">
            <div>
                <Header loggedIn={true}/>
                Browser
            </div>
        </div>
    )
}

export default Browse;