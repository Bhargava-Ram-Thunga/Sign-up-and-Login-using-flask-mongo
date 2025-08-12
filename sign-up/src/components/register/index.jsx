import React, { useState } from "react";
import Cookies from "js-cookie"
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const jwt = Cookies.get("jwt-token")
  const [userData, setuserData] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (event) => {
    event.preventDefault();
    const { password, confirm_password } = userData;

    if (password === confirm_password) {
      const getData = async () => {
        const options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        };
        const response = await fetch("http://127.0.0.1:5000/signup", options);
        if (response.ok) {
          navigate("/login");
        }
      };
      getData();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    jwt ? <Navigate to = "/home"/>:
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400 dark:from-gray-900 dark:to-black px-4 relative overflow-hidden">
      {/* Floating liquid blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-300 dark:bg-pink-900 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 opacity-20 rounded-full blur-3xl animate-pulse duration-700 -z-10" />

      <form
        onSubmit={handleForm}
        className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/30 dark:border-white/10 transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Create Account ✨
        </h2>

        {[
          { name: "firstName", type: "text", placeholder: "First Name" },
          { name: "lastName", type: "text", placeholder: "Last Name" },
          { name: "email", type: "email", placeholder: "Email" },
          { name: "password", type: "password", placeholder: "Password" },
          {
            name: "confirm_password",
            type: "password",
            placeholder: "Confirm Password",
          },
        ].map(({ name, type, placeholder }) => (
          <input
            key={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleInput}
            required
            className="mb-4 w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
          />
        ))}

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-300 font-semibold shadow-md"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
