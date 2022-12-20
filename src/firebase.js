import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTZfok4QrMNv8dz5yDE1f5w7Ul1WgxGwE",
    authDomain: "netflix-clone-practice-6bc82.firebaseapp.com",
    projectId: "netflix-clone-practice-6bc82",
    storageBucket: "netflix-clone-practice-6bc82.appspot.com",
    messagingSenderId: "843344180060",
    appId: "1:843344180060:web:ceb56373fe12f3d9ac0799"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth(firebaseApp)

  export {auth}
  export default db;