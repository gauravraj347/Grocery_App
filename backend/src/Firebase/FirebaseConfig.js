import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

 
const firebaseConfig = {
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const storage=getStorage(app);

export{db,storage};