import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllCountries } from "../services/countriesQueries";
import authQueries from "../services/authQueries";
import alerts from "../utils/alerts";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    country:"",
  })

  const [countries, setCountries] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    getAllCountries().then(setCountries);
  }, [])

const handleInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  const aux = {...formData};
  aux[name] = value;
  setFormData(aux)
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData)

  const aux = {...formData};
for (const key in aux) {
  if (!aux[key]) delete aux[key];
}
authQueries.register(aux).then((response) => {
  if (response.status == 201){
    alerts.success("Account created, you can log in now.")
    navigate("/login")
  } else {
    alerts.error(response.statusMsg)
  }
})
}

  return (
    <div className="flex justify-center my-[50px]">
      <div className="bg-image-buildings border border-black w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] bg-cover bg-center rounded-lg shadow-md overflow-hidden">
        <div className="w-[100%] h-[100%] backdrop-blur-[3px] p-10">
        <form onSubmit={handleSubmit} className="flex flex-col m-auto gap-5 p-5 lg:w-[80%] rounded-xl">
          <h1 className="text-3xl text-white text-center mb-2">Register</h1>
          <input
            type="text"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            placeholder="First Name"
            name="first_name"
            minLength={3}
            maxLength={12}
            onInput={handleInput}
          />
          <input
            type="text"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            placeholder="Last Name"
            name="last_name"
            minLength={3}
            maxLength={16}
            onInput={handleInput}
          />
          <input
            type="email"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            placeholder="Email"
            name="email"
            minLength={10}
            maxLength={30}
            onInput={handleInput}
          />
          <input
            type="password"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            placeholder="Password"
            name="password"
            minLength={8}
            maxLength={16}
            onInput={handleInput}
          />
          <input
            type="text"
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            placeholder="URL Image"
            name="image"
            onInput={handleInput}
          />
          <select
            id=""
            className="bg-gray-600 bg-opacity-70 h-10 rounded-lg px-5 text-white outline-none border border-gray-700"
            name="country"
            onInput={handleInput}
            defaultValue={"none"}
          >
            <option value="none" disabled>Select a country</option>
            {countries.length > 0 && countries.map((country) => (<option key={country} value={country}>{" "}{country}{" "}</option>))}
          </select>

          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 mt-10 h-10 rounded-full text-white cursor-pointer border border-gray-700"
            value="Register"
          >
          </input>
        </form>
        <p className="text-white text-center">
          Already have an account?{" "}
          <Link className="text-blue-400 underline bg-gray-800 p-1 rounded" to={"/Login"}>
            Login
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
