import React from "react";
import { NavLink, useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Opps! An error occurred.</h1>
      {err && <p>err.error</p>}
      <NavLink to="/">
        <button>Go Back To Home</button>
      </NavLink>
    </div>
  );
}

export default ErrorPage;
