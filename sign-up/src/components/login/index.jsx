import React, { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const jwt = Cookies.get("jwt-token")
  const [LoginDetails, setLoginDetails] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setLoginDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const getData = async () => {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(LoginDetails),
      };
      const response = await fetch("https://sign-up-and-login-using-flask-mongodb.onrender.com/login", options);
      const parsedResponse = await response.json();
      if (response.ok) {
        Cookies.set("jwt-token", parsedResponse.token);
        navigate("/home");
      }
    };
    getData();
  };

  return (
    jwt ? <Navigate to="/home"/> : 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 to-blue-400 dark:from-gray-900 dark:to-black px-4 relative overflow-hidden">
      {/* Floating liquid effect */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300 dark:bg-blue-900 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 dark:bg-indigo-800 opacity-20 rounded-full blur-3xl animate-pulse duration-700 -z-10" />

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/20 dark:bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/30 dark:border-white/10 transition-all duration-500"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Welcome Back 👋
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white transition"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-300 font-semibold shadow-md"
        >
          Log In
        </button>

        <p className="text-sm text-center mt-4 text-gray-700 dark:text-gray-300">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Create one
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
