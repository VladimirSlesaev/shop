
 import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAEtLglhaeZj1P34LNJfGrsj4WacAAX8jg",
    authDomain: "a-go-242c1.firebaseapp.com",
    databaseURL: "https://a-go-242c1.firebaseio.com",
    projectId: "a-go-242c1",
    storageBucket: "a-go-242c1.appspot.com",
    messagingSenderId: "360647315791",
    appId: "1:360647315791:web:72770d77f1e27cfff5753a",
    measurementId: "G-C3BJDFV4ZE",
  appId: '1:360647315791:web:72770d77f1e27cfff5753a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;