import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirebase } from "../../firebase";
import "./login.css"



const firebaseApp = getFirebase();

class Login extends Component {
    render (){
        const {user, signOut, signInWithGoogle} = this.props;
        return (
            <div className="loginBox">
                
                {
                    user ?
                    <p className="saludo">Hola! {user.displayName}</p>
                    : <p>Iniciar sesión</p>
                }
                {
                    user
                    ? <button className="sesion" onClick={signOut}>Cerrar Sesión</button>
                    : <button className="sesion" onClick={signInWithGoogle}>Loguearse con Google</button>
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