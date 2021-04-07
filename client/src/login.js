import React, { useState } from "react";
// import NewUser from './newUser';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


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
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
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
        
      </Form>
    </div>
  );
}