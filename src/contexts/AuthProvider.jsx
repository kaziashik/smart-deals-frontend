import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateuser = (updateData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const loggedUser = { email: currentUser.email }
                
                fetch('https://smart-deals-server-ecru.vercel.app/getToken', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify( loggedUser )
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("after gettting tikne", data.token);
                        localStorage.setItem('token', data.token)
                    })
            }
            else {
                localStorage.removeItem('token')
            }
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        signInWithGoogle,
        logOut,
        updateuser,
        loading,
        user


    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;