import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [fullname, setFullName] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleRegister = (e) => {
    e.preventDefault();

    // const dataRegister = {
    //   email: data.email,
    //   password: data.password,
    //   fullname: data.fullname,
    // };
    // console.log(dataRegister);

    axios
      .post(process.env.REACT_APP_API_BACKEND + "users/register", data)
      .then((res) => {
        alert("succesful register");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response);
        alert("gagal register");
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <Input
        type="email"
        placeholder="email"
        id="email"
        name="email"
        value={data.email}
        // onChange={(e)=>setEmail(e.target.value)}
        onChange={handleChange}
      />
      <Input
        type="password"
        placeholder="password"
        id="password"
        name="password"
        value={data.password}
        // onChange={(e)=>setPassword(e.target.value)}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="full name"
        id="fullname"
        name="fullname"
        value={data.fullname}
        // onChange={(e)=>setFullName(e.target.value)}
        onChange={handleChange}
      />
      <Button type="submit" id="button-addon2" title="Register" />
    </form>
  );
};

export default Register;
