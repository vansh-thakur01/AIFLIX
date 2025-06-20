import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async function(auth, email, password,navigate){
    try{
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        return user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage,errorCode);        
    }

}

export const signUp = async function(auth, email, password, navigate){
    try{
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        return user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);        
    }

}