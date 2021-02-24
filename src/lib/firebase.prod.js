import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyBAGknxwF3pMOyWVxLbK9KsonCkClzUCcM",
    authDomain: "netflix-clone-2f5b1.firebaseapp.com",
    projectId: "netflix-clone-2f5b1",
    storageBucket: "netflix-clone-2f5b1.appspot.com",
    messagingSenderId: "490851523934",
    appId: "1:490851523934:web:a5fccf1b65928a20a803cf",
    measurementId: "G-LF7Z5YZ9RC"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };