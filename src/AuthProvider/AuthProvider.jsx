import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User:", currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    })

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        const userEmail = email
        const loggedUser = { email: userEmail }
        console.log(loggedUser)
        setLoading(true)
        axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
            .then(data => console.log(data.data))
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        const currentUser = { email: user.email }
        axios.post('http://localhost:5000/logout', currentUser, { withCredentials: true })
            .then(res => console.log(res.data))
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        login,
        logOut,
        loading,
        user,
        setUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;