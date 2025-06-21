import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/fireBase';

export const ProfileSignout = () => {
    const navigate = useNavigate();

    const handelSignout = function(){
        signOut(auth).then(() => {
            console.log("done")
            navigate("/login");
            }).catch((error) => {
            // An error happened.
            console.log(error);

            });
        }
    return (
        <div>
            <div className="flex items-center gap-3">
                <img className="w-13 h-13" src="/monkeyhappy.png"></img>
                <div className="pointer-events-none text-gray-600">▼</div>
            </div>
            <div>
                <button onClick={handelSignout}>Sign Out?</button>
            </div>
        </div>
)}
