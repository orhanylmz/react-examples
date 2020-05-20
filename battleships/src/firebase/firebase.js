import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

import {config as firebaseConfig} from "../config/firebase";

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
        this.firestore = app.firestore();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    onAuthStateChanged = (signIn, signOut) => this.auth.onAuthStateChanged(function (user) {
        if (user) {
            signIn(user);
        } else {
            signOut();
        }
    })

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    games = () => this.firestore.collection("games");

    game = (id) => this.firestore.collection("games").doc(id);

    waitingGamesRef = () => this.games().where("state", "==", "waiting");
}

export default Firebase;