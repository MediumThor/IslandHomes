

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Userfront from "@userfront/react";

Userfront.init("6nz4p46n");


const SignupForm = Userfront.build({
  toolId: "nkmbbm",
});
const LoginForm = Userfront.build({
  toolId: "dbnkdr"
});
const PasswordResetForm = Userfront.build({
  toolId: "bklamk"
});

export default function app() {
  return (
   
          
            <Login />
            
  )
}

function Home() {
  return (
    <div>
      <h2>lkjdfcoiasj</h2>
      <LoginForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2></h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}





