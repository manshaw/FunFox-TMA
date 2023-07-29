import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const username = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    validation()
      ? navigate("/dashboard")
      : alert("Username or password is wrong");
  };

  const validation = () => {
    return username.current.value === "admin" &&
      password.current.value === "admin123"
      ? true
      : false;
  };

  return (
    <div className="login-page">
      <div className="container">
        <img src="/logo.png" alt="logo" />
        <h2>Login Page</h2>
        <input
          type="text"
          ref={username}
          placeholder="Username"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
