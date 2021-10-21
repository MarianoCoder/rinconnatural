import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirebase } from "../../firebase";


const firebaseApp = getFirebase();

class Login extends Component {
    render (){
        const {user, signOut, signInWithGoogle} = this.props;
        return (
            <div>
                {
                    user ?
                    <p>Hola, {user.displayName}</p>
                    : <p>Iniciar sesión</p>
                }
                {
                    user
                    ? <button onClick={signOut}>Cerrar Sesión</button>
                    : <button onClick={signInWithGoogle}>Loguearse con Google</button>
                }
            </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth()
const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
}) (Login);