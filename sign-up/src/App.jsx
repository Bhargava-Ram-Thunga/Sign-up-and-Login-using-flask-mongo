import Register from "./components/register";
import Login from "./components/login";
import Home from "./components/home"
import Protected from "./components/protected"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected/>}><Route path="/home" element={<Home/>}></Route></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
