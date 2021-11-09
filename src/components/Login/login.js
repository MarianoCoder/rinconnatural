import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirebase } from "../../firebase";
import "./login.css";
import logo from "../Imagenes/logo.png";
import { Link } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";

const firebaseApp = getFirebase();

const Login = ({ user, signOut, signInWithGoogle }) => {
  const [userLogin, setUserLogin] = React.useState([]);
  const { addUser } = useLogin();

  const handlerUser = (user) => {
    signInWithGoogle(user).then((response) => {
      addUser(response.additionalUserInfo.profile.name);
    });
  };

  return (
    <div className="loginMain">
      <div>
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="loginBox">
        {user ? (
          <p className="saludo">Hola! {user.displayName}</p>
        ) : (
          <p>Iniciar sesión</p>
        )}
        {user ? (
          <button className="sesion" onClick={signOut}>
            Cerrar Sesión
          </button>
        ) : (
          <button className="sesion" onClick={handlerUser}>
            Loguearse con Google
          </button>
        )}
      </div>
    </div>
  );
};

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
