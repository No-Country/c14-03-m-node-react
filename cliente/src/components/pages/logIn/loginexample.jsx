import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth.js";
import { Link } from "react-router-dom";
import UserLogin from "../components/Login/UserLogin.jsx";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

  const { loginUser } = useAuth();

  const onSubmit = (data) => {
    const BASE_URL = import.meta.env.VITE_REACT_APP_URL
    const url = ${BASE_URL}/users/login;
    loginUser(url, data);
    const user = localStorage.getItem("user");
    if (user) {
      window.location.reload();
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      
    </>
  );
};

export default LoginPage;

import axios from "axios";

const useAuth = () => {
  const createUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = (url, data) => {
    axios
      .post(url, data)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch((err) => console.error(err));
  };

  return { createUser, loginUser };
};

export default useAuth;