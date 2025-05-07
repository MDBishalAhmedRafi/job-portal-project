import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
                const provider = new GoogleAuthProvider()
                const [user, setUser] = useState(null);
                console.log(user);
                const createUser = (email, password) => { 
                                return createUserWithEmailAndPassword(auth, email, password)
                };

                const logIn = (email, password) => { 
                                return signInWithEmailAndPassword(auth, email, password)
                }

                const googleLogIn = () => { 
                                return signInWithPopup(auth, provider)
                }

                const logOut = () => { 
                                return signOut(auth);
                }
                
                useEffect(()=> { 
                                const usSubscribe = onAuthStateChanged(auth, (currentUser) => { 
                                                setUser(currentUser);
                                                return () => { 
                                                                usSubscribe();
                                                }
                                })
                }, [])
                const authData = { 
                user,
                setUser,
                createUser,
                logOut,
                logIn,
                googleLogIn,
                }
                return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;