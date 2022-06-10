import * as React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Oops! La página solicitada no existe...</h1>
      <Link to="/">
        <button className="btnNot">Volver</button>
      </Link>
    </div>
  );
};

export default NotFound;
