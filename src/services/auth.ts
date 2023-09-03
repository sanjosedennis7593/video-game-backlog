import firebaseInstance from "@/config/firebase";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from "firebase/auth";

const auth = getAuth(firebaseInstance);


export async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
};

export async function signIn(email: string, password: string) {
    let result = null,
        error = null;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
};


export async function logOut() {
    let result = null,
        error = null;
    try {
        result = await signOut(auth);
        console.log('logOut result', result)
    } catch (e) {
        console.log('logOut err', e)
        error = e;
    }
    return { result, error }
}