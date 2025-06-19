import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import {Login} from "./Login";

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:"/browser",
            element:<Header/>
        }
    ])


    return (
        <div className="w-v4">
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;