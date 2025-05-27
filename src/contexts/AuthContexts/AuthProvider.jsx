import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContexts';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, ProviderId, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';
 const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
        const [loading,setLoading] = useState(true);
        const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
                setLoading(true);

        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    const singOutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('user in the auth state change',currentUser);
        })
        return () =>{
            unSubscribe();
        }
    },[])
    const authInfo ={
        loading,
        user,
        createUser,
        signIn,
     signInWithGoogle,
    singOutUser
    }
    return (
        <AuthContext value={authInfo}>
{children}
        </AuthContext>
    );
};

export default AuthProvider;