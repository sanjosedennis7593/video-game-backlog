'use client'
import React, { ReactNode, createContext, useContext ,useEffect, useState }  from 'react';
import {
    onAuthStateChanged,
    getAuth
} from 'firebase/auth';

import firebaseInstance from '@/config/firebase';

const auth = getAuth(firebaseInstance);

export const AuthContext = createContext({ user: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
  }: {
    children: ReactNode
  }) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        
            if (user) {
   
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {loading ? <div></div> : children}
        </AuthContext.Provider>
    );
};