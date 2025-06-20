import {createBrowserRouter, RouterProvider, useNavigate} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Browse from "./Browse";
import {Login} from "./Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {addUser, removeUser} from "../utils/userSlice"
import { auth } from "../utils/fireBase";

const Body = () => {
    const dispatch = useDispatch();
    
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
            path:"/browse",
            element:<Browse/>
        }
    ])
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName} = user;
            dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        } else {
            dispatch(removeUser());
        }
        });
    },[]);


    return (
        <div className="w-v4">
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;