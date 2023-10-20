import { collection, addDoc } from "firebase/firestore";

import { firestoreInstance } from "@/config/firebase";

// TYPES
import { UserGames } from '@/types/games';

export const addGames = async (data: UserGames) => {
    try {
        const docRef = await addDoc(collection(firestoreInstance, "games"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}