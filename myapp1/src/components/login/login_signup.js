import React, { useState } from "react";
import '../login/login_signup.css';
import { Auth } from 'aws-amplify';

function Login() {
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [signInUsername, setSignInUsername] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const user = await Auth.signIn(signInUsername, signInPassword);
      console.log('Sign in success:', user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const data = await Auth.signUp({
        username: signUpEmail,
        password: signUpPassword,
        attributes: {
          email: signUpEmail,   // default
          given_name: signUpName,
        }
      });
      console.log('Sign up success:', data);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div id="login-signup-container" className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
      <div id="sign-in-form-container" className="form-container sign-in-container">
        <form onSubmit={handleSignIn}>
          <h1>Sign in</h1>
          <input type="text" placeholder="Username" required onChange={(e) => setSignInUsername(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setSignInPassword(e.target.value)} />
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div id="sign-up-form-container" className="form-container sign-up-container">
        <form onSubmit={handleSignUp}>
          <h1 className="h1_signin">Create Account</h1>
          <input type="text" placeholder="Name" required onChange={(e) => setSignUpName(e.target.value)} />
          <input type="email" placeholder="Email" required onChange={(e) => setSignUpEmail(e.target.value)} />
          <input type="password" placeholder="Password" required onChange={(e) => setSignUpPassword(e.target.value)} />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div id="overlay-container" className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1 className="login_h1">Welcome Back!</h1>
            <button
              className="ghost"
              onClick={() => setRightPanelActive(false)}
            >
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1 className="hello">Hello, Student!</h1>
            <button className="ghost" onClick={() => setRightPanelActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
