import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


export const signIn = async function(auth, name, email, password){
    try{
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName: name});
        return user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        throw error;        
    }
    
}

export const signUp = async function(auth, email, password){
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);
        throw error;        
    }

}