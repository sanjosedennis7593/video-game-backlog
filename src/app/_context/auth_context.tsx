'use client'
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import {
    onAuthStateChanged,
    getAuth
} from 'firebase/auth';

import { firebaseInstance } from '@/config/firebase';

// TYPES 
import { User } from '@/types/user';

const auth = getAuth(firebaseInstance);

type AuthContextType = {
    user: User
};

export const AuthContext = createContext<AuthContextType>({
    user: {
        uid: '',
        email: '',
        displayName: ''
    }
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({
    children,
}: {
    children: ReactNode
}) => {
    const [user, setUser] = useState<User>({
        uid: '',
        email: '',
        displayName: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {

                const uid = user.uid;
                const email = user.email;
                const displayName = user.displayName;

                setUser({
                    uid,
                    email,
                    displayName,
                });
            } else {
                setUser({
                    uid: '',
                    email: '',
                    displayName: ''
                });
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