import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDTF2Rzx_pWY40yDdcNQ035xGwt8LJVfos",
    authDomain: "tenedores-pasto.firebaseapp.com",
    databaseURL: "https://tenedores-pasto.firebaseio.com",
    projectId: "tenedores-pasto",
    storageBucket: "tenedores-pasto.appspot.com",
    messagingSenderId: "697114292624",
    appId: "1:697114292624:web:f83c9b649d24423fb6c315"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);