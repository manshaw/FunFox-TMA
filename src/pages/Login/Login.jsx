import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.scss";
import Swal from "sweetalert2";

const Login = () => {
  const userId = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const showLoading = () => {
    Swal.fire({
      title: "loading ...",
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };

  const showError = ()=>{
    Swal.fire(
        'Error',
        'Fill all fields',
        'error'
      )
  }

  const handleSubmit = () => {
    validation()
      ? Signin()
      : showError();
  };

  const validation = () => {
    return userId.current.value !== "" && password.current.value !== ""
      ? true
      : false;
  };

  const Signin = () => {
    showLoading();
    let data = JSON.stringify({
      userId: userId.current.value,
      password: password.current.value,
    });

    let config = {
      method: "post",
      url: "http://localhost:3000/signin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        Swal.close();
        console.log(JSON.stringify(response.data));
        navigate("/dashboard");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="login-page">
      <div className="container">
        <img src="/logo.png" alt="logo" />
        <h2>Login Page</h2>
        <input
          type="number"
          ref={userId}
          placeholder="User ID"
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
