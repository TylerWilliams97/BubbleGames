import React, { useState } from "react";
// import NewUser from './newUser';
import { Button, form, TextField } from "@material-ui/core";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <form size="lg"Id="email">
        <TextField id="standard-basic" label="Standard" />
          <form>Email</form>
          <form
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
        <form size="lg"Id="password">
          <form>Password</form>
          <form
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        {newUser ? <Button block size="lg" type="submit" disabled={!validateForm()}>
            Register
          </Button> : <>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
            </Button>
            <Button block size='lg' type='submit' onClick = {()=>setNewUser(true)}>
                New User
            </Button>
          </>}
        
      </form>
    </div>
  );
}