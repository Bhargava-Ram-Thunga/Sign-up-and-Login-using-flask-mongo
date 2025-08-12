import React from "react";
import Cookies from "js-cookie";
import { useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const handleLogout = (event) => {
        event.preventDefault()
        Cookies.remove("jwt-token")
        navigate("/login")
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-200 to-purple-300 dark:from-gray-900 dark:to-black px-6 relative overflow-hidden">
      {/* Floating blobs for liquid animation effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 dark:bg-purple-800 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 dark:bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse -z-10" />

      {/* Glassmorphism Card */}
      <div className="bg-white/20 dark:bg-white/10 backdrop-blur-2xl border border-white/30 dark:border-white/10 rounded-3xl shadow-xl p-10 text-center max-w-2xl w-full space-y-6 transition-all duration-300">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white hover:scale-105 transition-transform duration-300">
          Welcome to Your Dashboard 👨‍💻
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          You’ve successfully logged in. This is your digital playground —
          build, break, and become better.
        </p>
        <form
          onSubmit={handleLogout}
          className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md"
        >
          <button type="submit">Logout</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
