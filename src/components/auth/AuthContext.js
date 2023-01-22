import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { auth } from "../firebase";


const userContext = createContext()

export const AuthContectProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    return (
        <userContext.Provider value={createUser}>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return userContext(userContext)
}