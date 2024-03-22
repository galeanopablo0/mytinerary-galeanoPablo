import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";
import { login } from "../redux/actions/userAction";
import {  useDispatch } from "react-redux";


const Login = () => {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })
  const dispatch = useDispatch();

const navigate = useNavigate();

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  const aux = {...formData};
  aux[name] = value;
  setFormData(aux)
}

const handleSubmit = (e) => {
  e.preventDefault();
  const aux = {...formData};
for (const key in aux) {
  if (!aux[key]) delete aux[key];
}
authQueries.login(aux).then((response) => {
  if (response.status == 200){
    dispatch(login(response.data))
    alerts.success("Successful login")
    navigate("/")
  } else {
    alerts.error(response.statusMsg)
  }
})
}

  return (
    <div className="flex justify-center my-[50px] min-h-[65vh]">
      <div className="bg-image-buildings border border-black w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] bg-cover bg-center rounded-lg overflow-hidden shadow-3xl">
        <div className="w-[100%] h-[100%] backdrop-blur-[3px] p-10">
        <form onSubmit={handleSubmit} className="flex flex-col m-auto gap-5 p-5 lg:w-[80%] rounded-xl">
          <h1 className="text-3xl text-[#EDEDEE] text-center mb-2">Sign in</h1>
          <input
            type="email"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-[#EDEDEE] outline-none border border-gray-700"
            placeholder="Email"
            name="email"
            minLength={10}
            maxLength={30}
            onInput={handleInput}
          />
          <input
            type="password"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-[#EDEDEE] outline-none border border-gray-700"
            placeholder="Password"
            name="password"
            minLength={8}
            maxLength={16}
            onInput={handleInput}
          />
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 mt-10 h-10 rounded-full text-[#EDEDEE] cursor-pointer"
            value="Login"
          >
          </input>
        </form>
        <p className="text-white text-center">
          You don't have an account?{" "}
          <Link className="text-blue-400 underline bg-gray-800 p-1 rounded" to={"/Login"}>
           Sign up
          </Link>
        </p>
        </div>
        
      </div>
    </div>
  )
}

export default Login