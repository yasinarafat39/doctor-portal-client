import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider();

    // create user with E-mail and Password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with E-mail and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Google Login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // password reset Email
    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    // Log Out
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Update a user
    const userUpdate = (userInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo)
    }

    const authInfo = {
        createUser,
        login,
        user,
        loading,
        LogOut,
        userUpdate,
        googleLogin,
        passwordReset
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);
        })

        return () => unsubscribe()
    }, [])

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;